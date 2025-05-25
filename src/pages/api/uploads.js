import formidable from "formidable"
import path from "path"
import fs from "fs"

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

  try {
    // Determine the uploads directory based on environment
    // In production (Render.com), use the persistent disk path
    // In development, use the local public/uploads directory
    const isProduction = process.env.NODE_ENV === 'production'
    const uploadsDir = isProduction 
      ? '/opt/render/project/uploads' 
      : path.join(process.cwd(), "public/uploads")
    
    // Create uploads directory if it doesn't exist
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true })
      console.log("Created uploads directory at:", uploadsDir)
    }

    // Parse the form data
    const form = new formidable.IncomingForm({
      uploadDir: uploadsDir,
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

      // Load metadata
      const metadataPath = path.join(uploadsDir, "metadata.json")
      let metadata = {}

      // Load existing metadata if it exists
      if (fs.existsSync(metadataPath)) {
        try {
          const metadataContent = fs.readFileSync(metadataPath, "utf8")
          metadata = JSON.parse(metadataContent)
        } catch (err) {
          console.error("Error reading metadata:", err)
          // Continue with empty metadata if file is corrupted
        }
      }

      // Process each file
      const uploadResults = fileArray.map((file) => {
        try {
          // Get file information
          const originalFilename = file.originalFilename || "unknown"
          const newFilename = `${Date.now()}-${originalFilename.replace(/\s+/g, "-")}`
          const oldPath = file.filepath
          const newPath = path.join(uploadsDir, newFilename)

          // Rename the file to include timestamp
          fs.renameSync(oldPath, newPath)

          // Add new file metadata
          metadata[newFilename] = {
            programId,
            description,
            uploadDate: new Date().toISOString(),
          }

          console.log("File uploaded:", {
            filename: newFilename,
            programId,
            description,
          })

          return {
            success: true,
            filename: newFilename,
            filepath: `/api/serve-image?filename=${encodeURIComponent(newFilename)}`,
            originalFilename: originalFilename,
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

      // Save updated metadata
      fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2))

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

