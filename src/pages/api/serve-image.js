import fs from "fs"
import path from "path"

export default function handler(req, res) {
  if (req.method !== "GET") {
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
    const isProduction = process.env.NODE_ENV === 'production'
    const uploadsDir = isProduction 
      ? '/opt/render/project/uploads' 
      : path.join(process.cwd(), "public/uploads")

    // Path to the file
    const filePath = path.join(uploadsDir, sanitizedFilename)

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`)
      return res.status(404).json({ error: "File not found" })
    }

    // Get file extension to determine content type
    const ext = path.extname(sanitizedFilename).toLowerCase()
    let contentType = 'application/octet-stream' // Default content type
    
    // Set appropriate content type based on file extension
    switch (ext) {
      case '.jpg':
      case '.jpeg':
        contentType = 'image/jpeg'
        break
      case '.png':
        contentType = 'image/png'
        break
      case '.gif':
        contentType = 'image/gif'
        break
      case '.webp':
        contentType = 'image/webp'
        break
    }

    // Read the file
    const fileBuffer = fs.readFileSync(filePath)
    
    // Set headers
    res.setHeader('Content-Type', contentType)
    res.setHeader('Content-Length', fileBuffer.length)
    res.setHeader('Cache-Control', 'public, max-age=86400') // Cache for 1 day
    
    // Send the file
    return res.status(200).send(fileBuffer)
  } catch (error) {
    console.error("Error serving image:", error)
    return res.status(500).json({ error: "Failed to serve image" })
  }
}