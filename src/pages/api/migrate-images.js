import fs from 'fs';
import path from 'path';
import formidable from 'formidable';
import { createReadStream } from 'fs';
import fetch from 'node-fetch';
import FormData from 'form-data';

// Disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  // Only allow this endpoint in development mode and with a special key
  if (process.env.NODE_ENV !== 'development') {
    return res.status(403).json({ error: 'This endpoint is only available in development mode' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse the form data to get the migration key
    const form = new formidable.IncomingForm();
    const { fields } = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

    // Check for the migration key (you should set this to something secure)
    const migrationKey = fields.migrationKey;
    if (migrationKey !== 'rrvc5uvivrr6rvri6v6irviiri') {
      return res.status(403).json({ error: 'Invalid migration key' });
    }

    // Get the production URL from the request
    const productionUrl = fields.productionUrl;
    if (!productionUrl) {
      return res.status(400).json({ error: 'Production URL is required' });
    }

    // Get the local uploads directory
    const localUploadsDir = path.join(process.cwd(), 'public/uploads');
    if (!fs.existsSync(localUploadsDir)) {
      return res.status(404).json({ error: 'Local uploads directory not found' });
    }

    // Read the metadata file
    const metadataPath = path.join(localUploadsDir, 'metadata.json');
    let metadata = {};
    if (fs.existsSync(metadataPath)) {
      const metadataContent = fs.readFileSync(metadataPath, 'utf8');
      metadata = JSON.parse(metadataContent);
    } else {
      return res.status(404).json({ error: 'Metadata file not found' });
    }

    // Get all image files
    const files = fs.readdirSync(localUploadsDir);
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const imageFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext) && file !== 'metadata.json';
    });

    console.log(`Found ${imageFiles.length} images to migrate`);

    // Migrate each image
    const results = [];
    for (const filename of imageFiles) {
      try {
        const filePath = path.join(localUploadsDir, filename);
        const fileMetadata = metadata[filename] || {};
        
        // Create form data for the upload
        const formData = new FormData();
        formData.append('file', createReadStream(filePath), filename);
        formData.append('programId', fileMetadata.programId || 'unknown');
        formData.append('description', fileMetadata.description || '');

        // Upload to production
        const uploadUrl = `${productionUrl}/api/uploads`;
        console.log(`Uploading ${filename} to ${uploadUrl}`);
        
        const uploadResponse = await fetch(uploadUrl, {
          method: 'POST',
          body: formData,
        });

        if (!uploadResponse.ok) {
          const errorText = await uploadResponse.text();
          throw new Error(`Upload failed: ${errorText}`);
        }

        const uploadResult = await uploadResponse.json();
        results.push({
          filename,
          success: true,
          productionFilename: uploadResult.filename,
        });
        
        console.log(`Successfully migrated ${filename}`);
      } catch (error) {
        console.error(`Error migrating ${filename}:`, error);
        results.push({
          filename,
          success: false,
          error: error.message,
        });
      }
    }

    // Return the results
    return res.status(200).json({
      totalImages: imageFiles.length,
      migratedSuccessfully: results.filter(r => r.success).length,
      failed: results.filter(r => !r.success).length,
      results,
    });
  } catch (error) {
    console.error('Error in migration:', error);
    return res.status(500).json({ error: 'Migration failed', message: error.message });
  }
}