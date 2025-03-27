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

    // Path to the file
    const filePath = path.join(process.cwd(), "public/uploads", sanitizedFilename)

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "File not found" })
    }

    // Delete the file
    fs.unlinkSync(filePath)

    console.log("File deleted:", sanitizedFilename)

    return res.status(200).json({ success: true, message: "Image deleted successfully" })
  } catch (error) {
    console.error("Error deleting image:", error)
    return res.status(500).json({ error: "Failed to delete image" })
  }
}

