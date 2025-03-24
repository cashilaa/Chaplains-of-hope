"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { AnimatedSection } from "@/components/ui/animated-section"
import { X } from "lucide-react"

interface ImageItem {
  id: number
  filename: string
  description: string
  programId: string
  uploadDate: string
}

export default function ProgramGallery() {
  const [images, setImages] = useState<ImageItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null)

  const pathname = usePathname()
  // Extract the program ID from the URL path (last segment)
  const segments = pathname ? pathname.split("/") : []
  const programId = segments[segments.length - 1]

  const fetchImages = async () => {
    try {
      setIsLoading(true)
      setError("")

      console.log("Fetching images for program:", programId)

      const response = await fetch(`/api/images?programId=${encodeURIComponent(programId)}`)

      if (!response.ok) {
        const text = await response.text()
        console.error("Server response:", text)
        throw new Error(`HTTP error ${response.status}`)
      }

      const data = await response.json()
      console.log("Fetched images:", data.images)
      setImages(data.images || [])
    } catch (error) {
      console.error("Error fetching images:", error)
      setError(error instanceof Error ? error.message : "Failed to load images. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchImages()

    // Listen for new image uploads
    const handleImageUploaded = () => {
      fetchImages()
    }

    window.addEventListener("imageUploaded", handleImageUploaded)

    return () => {
      window.removeEventListener("imageUploaded", handleImageUploaded)
    }
  }, [programId])

  const openLightbox = (image: ImageItem) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  if (isLoading) {
    return (
      <div className="py-8 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-green-500 border-r-transparent"></div>
        <p className="mt-2 text-gray-600">Loading gallery...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-8 text-center">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md inline-block">
          <p className="font-medium">Error loading gallery</p>
          <p className="text-sm">{error}</p>
          <button
            onClick={fetchImages}
            className="mt-2 text-sm bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded-md transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  if (images.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500 bg-gray-50 rounded-lg p-8">
        <div className="text-4xl mb-3">📷</div>
        <h3 className="text-xl font-medium text-gray-700 mb-2">No images yet</h3>
        <p>Be the first to share a photo in this gallery!</p>
      </div>
    )
  }

  return (
    <div className="py-8">
      <AnimatedSection>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Community Gallery</h3>
        <p className="text-gray-600 mb-6">Photos shared by our community members</p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <AnimatedSection key={image.id} delay={0.1 * (index % 6)}>
            <div
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow group"
              onClick={() => openLightbox(image)}
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                <img
                  src={`/uploads/${image.filename}`}
                  alt={image.description || "Uploaded image"}
                  className="absolute inset-0 w-full h-full object-cover z-10 group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=300&width=400"
                  }}
                />
              </div>
              <div className="p-4">
                {image.description ? (
                  <p className="text-gray-700 text-sm line-clamp-2">{image.description}</p>
                ) : (
                  <p className="text-gray-400 text-sm italic">No description provided</p>
                )}
                <p className="text-gray-400 text-xs mt-2">
                  {new Date(image.uploadDate).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div
            className="max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="relative h-[60vh] bg-gray-100">
                <img
                  src={`/uploads/${selectedImage.filename}`}
                  alt={selectedImage.description || "Uploaded image"}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=600&width=800"
                  }}
                />
              </div>
              <button
                className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                onClick={closeLightbox}
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              {selectedImage.description ? (
                <p className="text-gray-800">{selectedImage.description}</p>
              ) : (
                <p className="text-gray-400 italic">No description provided</p>
              )}
              <p className="text-gray-500 text-sm mt-2">
                Uploaded on{" "}
                {new Date(selectedImage.uploadDate).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

