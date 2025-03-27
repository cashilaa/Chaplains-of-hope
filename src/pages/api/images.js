import fs from "fs"
import path from "path"

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { programId } = req.query

    if (!programId) {
      return res.status(400).json({ error: "Program ID is required" })
    }

    console.log("Fetching images for program:", programId)

    // Ensure uploads directory exists
    const uploadsDir = path.join(process.cwd(), "public/uploads")
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true })
      console.log("Created uploads directory")

      // Return empty array if directory was just created
      return res.status(200).json({ images: [] })
    }

    // Path to metadata file
    const metadataPath = path.join(process.cwd(), "public/uploads/metadata.json")

    // Load metadata if exists
    let metadata = {}
    if (fs.existsSync(metadataPath)) {
      try {
        const metadataContent = fs.readFileSync(metadataPath, "utf8")
        metadata = JSON.parse(metadataContent)
      } catch (err) {
        console.error("Error reading metadata:", err)
        // Continue with empty metadata if file is corrupted
      }
    }

    // Read files from the uploads directory
    const files = fs.readdirSync(uploadsDir)
    console.log("Files in uploads directory:", files)

    // Filter for image files
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"]
    const imageFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase()
      return imageExtensions.includes(ext) && file !== "metadata.json"
    })

    // Create image objects
    const images = imageFiles.map((filename, index) => {
      const stats = fs.statSync(path.join(uploadsDir, filename))
      const fileMetadata = metadata[filename] || {}

      return {
        id: index + 1,
        filename,
        description: fileMetadata.description || `Image ${index + 1}`,
        programId: fileMetadata.programId || programId,
        uploadDate: stats.mtime.toISOString(),
      }
    })

    // Sort by upload date (newest first)
    images.sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime())

    return res.status(200).json({ images })
  } catch (error) {
    console.error("Error fetching images:", error)
    return res.status(500).json({ error: "Failed to fetch images" })
  }
}

