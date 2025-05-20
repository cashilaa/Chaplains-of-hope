import fs from "fs"
import path from "path"

export default function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { filename } = req.query

    if (!filename) {
      return res.status(400).json({ error: "Filename is required" })
    }

    // Prevent path traversal attacks
    const sanitizedFilename = path.basename(filename)

    // Determine the uploads directory based on environment
    // In production (Render.com), use the persistent disk path
    // In development, use the local public/uploads directory
    const isProduction = process.env.NODE_ENV === 'production'
    const uploadsDir = isProduction 
      ? '/opt/render/project/uploads' 
      : path.join(process.cwd(), "public/uploads")
    
    // Path to the file
    const filePath = path.join(uploadsDir, sanitizedFilename)

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "File not found" })
    }

    // Delete the file
    fs.unlinkSync(filePath)

    // Also remove the file from metadata
    const metadataPath = path.join(uploadsDir, "metadata.json")
    if (fs.existsSync(metadataPath)) {
      try {
        const metadataContent = fs.readFileSync(metadataPath, "utf8")
        const metadata = JSON.parse(metadataContent)
        
        // Remove the entry for this file
        if (metadata[sanitizedFilename]) {
          delete metadata[sanitizedFilename]
          
          // Save updated metadata
          fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2))
        }
      } catch (err) {
        console.error("Error updating metadata after deletion:", err)
        // Continue even if metadata update fails
      }
    }

    console.log("File deleted:", sanitizedFilename)

    return res.status(200).json({ success: true, message: "Image deleted successfully" })
  } catch (error) {
    console.error("Error deleting image:", error)
    return res.status(500).json({ error: "Failed to delete image" })
  }
}

