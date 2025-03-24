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
    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), "public/uploads")
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true })
    }

    // Parse the form data
    const form = new formidable.IncomingForm({
      uploadDir: uploadsDir,
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB
    })

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error("Error parsing form:", err)
        return res.status(500).json({ error: "Failed to process upload" })
      }

      const file = files.file
      if (!file) {
        return res.status(400).json({ error: "No file uploaded" })
      }

      // Get file information
      const originalFilename = file.originalFilename || "unknown"
      const newFilename = `${Date.now()}-${originalFilename.replace(/\s+/g, "-")}`
      const oldPath = file.filepath
      const newPath = path.join(uploadsDir, newFilename)

      // Rename the file to include timestamp
      fs.renameSync(oldPath, newPath)

      // Get program ID and description from form fields
      const programId = fields.programId || "unknown"
      const description = fields.description || ""

      // In a real app, you would save this information to a database
      console.log("File uploaded:", {
        filename: newFilename,
        programId,
        description,
      })

      return res.status(200).json({
        success: true,
        filename: newFilename,
        filepath: `/uploads/${newFilename}`,
        description,
        programId,
      })
    })
  } catch (error) {
    console.error("Error handling upload:", error)
    return res.status(500).json({ error: "Failed to upload file" })
  }
}

