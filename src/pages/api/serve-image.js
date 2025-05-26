import cloudinary, { isCloudinaryConfigured } from "../../lib/cloudinary"

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  // Check if Cloudinary is properly configured
  if (!isCloudinaryConfigured()) {
    return res.status(500).json({
      error: "Cloudinary is not properly configured. Please set up your environment variables."
    })
  }

  try {
    const { filename, publicId, filepath } = req.query

    // Log usage for optimization tracking
    if (filepath) {
      console.log("⚠️  OPTIMIZATION NOTICE: Using serve-image API with filepath. Consider using direct URL:", filepath)
    } else if (publicId) {
      console.log("⚠️  LEGACY: Using serve-image API with publicId parameter")
    } else if (filename) {
      console.log("⚠️  INEFFICIENT: Using serve-image API with filename search")
    }

    // Priority order: filepath > publicId > filename
    // This maintains backward compatibility while encouraging the new approach
    if (!filepath && !publicId && !filename) {
      return res.status(400).json({ 
        error: "filepath, publicId, or filename is required. Use 'filepath' for best performance." 
      })
    }

    let publicUrl

    if (filepath) {
      // If filepath is already a full Cloudinary URL, redirect directly
      if (filepath.includes('cloudinary.com')) {
        publicUrl = filepath
      } else {
        // This shouldn't happen with Cloudinary, but just in case
        return res.status(400).json({ error: "Invalid filepath format" })
      }
    } else if (publicId) {
      // Get URL from public ID
      publicUrl = cloudinary.url(publicId)
    } else {
      // LEGACY: Filename search - least efficient, maintained for backward compatibility
      const result = await cloudinary.search
        .expression(`filename:${filename}`)
        .max_results(1)
        .execute();
      
      if (!result || !result.resources || result.resources.length === 0) {
        return res.status(404).json({ error: "File not found" });
      }
      
      publicUrl = result.resources[0].secure_url;
    }

    // Redirect to the Cloudinary public URL
    res.redirect(302, publicUrl)
  } catch (error) {
    console.error("Error serving image:", error)
    return res.status(500).json({ error: "Failed to serve image" })
  }
}