import cloudinary, { isCloudinaryConfigured } from "../../lib/cloudinary"

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  // Check if Cloudinary is properly configured
  if (!isCloudinaryConfigured()) {
    return res.status(200).json({ 
      images: [],
      warning: "Cloudinary is not properly configured. Please set up your environment variables." 
    })
  }

  try {
    const { programId } = req.query

    if (!programId) {
      return res.status(400).json({ error: "Program ID is required" })
    }

    console.log("Fetching images for program:", programId)

    // List files from the program's folder in Cloudinary
    const result = await cloudinary.search
      .expression(`folder:${programId}`)
      .sort_by('created_at', 'desc')
      .max_results(100)
      .execute();

    if (!result || !result.resources) {
      // If no resources found, return an empty array
      return res.status(200).json({ images: [] })
    }

    // Create image objects
    const images = result.resources.map((resource, index) => {
      // Extract metadata from filename if available
      // Format is typically: timestamp-originalname
      const filename = resource.filename;
      const parts = filename.split('-');
      const timestamp = parts[0];
      const uploadDate = timestamp && !isNaN(timestamp)
        ? new Date(parseInt(timestamp)).toISOString()
        : resource.created_at || new Date().toISOString();

      return {
        id: index + 1,
        filename: resource.filename,
        filepath: resource.secure_url,
        description: resource.context?.description || `Image ${index + 1}`,
        programId: programId,
        uploadDate: uploadDate,
        size: resource.bytes,
        cloudinaryPublicId: resource.public_id,
        width: resource.width,
        height: resource.height,
        format: resource.format
      }
    });

    return res.status(200).json({ images })
  } catch (error) {
    console.error("Error fetching images:", error)
    return res.status(500).json({ error: "Failed to fetch images" })
  }
}

