import formidable from "formidable"
import path from "path"
import fs from "fs"
import cloudinary, { isCloudinaryConfigured } from "../../lib/cloudinary"

// Disable the default body parser to handle form data
export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  // Check if Cloudinary is properly configured
  if (!isCloudinaryConfigured()) {
    return res.status(500).json({ 
      error: "Cloudinary is not properly configured. Please set up your environment variables." 
    })
  }

  try {
    // Create a temporary directory for file processing
    const tempDir = path.join(process.cwd(), "tmp")
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true })
    }

    // Parse the form data
    const form = new formidable.IncomingForm({
      uploadDir: tempDir,
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB
      multiples: true, // Enable multiple file uploads
    })

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Error parsing form:", err)
        return res.status(500).json({ error: "Failed to process upload" })
      }

      // Handle both single and multiple file uploads
      const fileArray = files.files ? 
        (Array.isArray(files.files) ? files.files : [files.files]) : 
        (files.file ? (Array.isArray(files.file) ? files.file : [files.file]) : []);

      if (fileArray.length === 0) {
        return res.status(400).json({ error: "No files uploaded" })
      }

      // Get program ID and description from form fields
      const programId = fields.programId || "unknown"
      const description = fields.description || ""

      // Process each file
      const uploadPromises = fileArray.map(async (file) => {
        try {
          // Get file information
          const originalFilename = file.originalFilename || "unknown"
          const timestamp = Date.now()
          const newFilename = `${timestamp}-${originalFilename.replace(/\s+/g, "-")}`
          const filePath = file.filepath
          
          // Upload to Cloudinary
          const uploadResult = await cloudinary.uploader.upload(filePath, {
            folder: programId,
            public_id: newFilename.substring(0, newFilename.lastIndexOf('.')), // Remove extension for public_id
            resource_type: "auto",
            context: `description=${description}|programId=${programId}|originalFilename=${originalFilename}`,
            overwrite: false
          });

          // Clean up the temporary file
          fs.unlinkSync(filePath)

          console.log("File uploaded to Cloudinary:", {
            filename: newFilename,
            programId,
            description,
          })

          return {
            success: true,
            filename: newFilename,
            filepath: uploadResult.secure_url,
            originalFilename: originalFilename,
            cloudinaryPublicId: uploadResult.public_id,
            width: uploadResult.width,
            height: uploadResult.height,
            format: uploadResult.format
          }
        } catch (error) {
          console.error("Error processing file:", error)
          return {
            success: false,
            originalFilename: file.originalFilename || "unknown",
            error: error.message,
          }
        }
      })

      // Wait for all uploads to complete
      const uploadResults = await Promise.all(uploadPromises)

      return res.status(200).json({
        success: true,
        totalFiles: fileArray.length,
        successfulUploads: uploadResults.filter(r => r.success).length,
        failedUploads: uploadResults.filter(r => !r.success).length,
        files: uploadResults,
        description,
        programId,
      })
    })
  } catch (error) {
    console.error("Error handling upload:", error)
    return res.status(500).json({ error: "Failed to upload files" })
  }
}

