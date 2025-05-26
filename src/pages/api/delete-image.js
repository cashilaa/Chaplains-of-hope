import cloudinary, { isCloudinaryConfigured } from "../../lib/cloudinary"

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  // Check if Cloudinary is properly configured
  if (!isCloudinaryConfigured()) {
    return res.status(500).json({ 
      error: "Cloudinary is not properly configured. Please set up your environment variables." 
    })
  }

  try {
    const { publicId, filename } = req.query

    if (!publicId && !filename) {
      return res.status(400).json({ error: "publicId or filename is required" })
    }

    let publicIdToDelete;

    if (publicId) {
      // If a public ID is provided, use it directly
      publicIdToDelete = publicId;
    } else {
      // For backward compatibility - search for the file by name
      // This is less efficient but maintains compatibility with existing code
      const result = await cloudinary.search
        .expression(`filename:${filename}`)
        .max_results(1)
        .execute();
      
      if (!result || !result.resources || result.resources.length === 0) {
        return res.status(404).json({ error: "File not found" });
      }
      
      publicIdToDelete = result.resources[0].public_id;
    }

    // Delete the file from Cloudinary
    const deleteResult = await cloudinary.uploader.destroy(publicIdToDelete);

    if (deleteResult.result !== 'ok') {
      console.error("Error deleting from Cloudinary:", deleteResult);
      return res.status(500).json({ error: "Failed to delete image", details: deleteResult });
    }

    console.log("File deleted from Cloudinary:", publicIdToDelete);

    return res.status(200).json({ success: true, message: "Image deleted successfully" });
  } catch (error) {
    console.error("Error deleting image:", error);
    return res.status(500).json({ error: "Failed to delete image" });
  }
}

