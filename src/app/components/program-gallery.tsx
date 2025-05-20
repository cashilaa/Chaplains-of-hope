"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { AnimatedSection } from "@/components/ui/animated-section"
import { X, Trash2, AlertCircle } from "lucide-react"

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
  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteError, setDeleteError] = useState("")
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

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
    setShowDeleteConfirm(false)
    document.body.style.overflow = "auto"
  }

  const deleteImage = async (filename: string) => {
    try {
      setIsDeleting(true)
      setDeleteError("")

      const response = await fetch(`/api/delete-image?filename=${encodeURIComponent(filename)}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        const text = await response.text()
        console.error("Server response:", text)
        throw new Error(`HTTP error ${response.status}`)
      }

      // Close lightbox and refresh gallery
      closeLightbox()
      fetchImages()
    } catch (error) {
      console.error("Error deleting image:", error)
      setDeleteError(error instanceof Error ? error.message : "Failed to delete image. Please try again.")
    } finally {
      setIsDeleting(false)
      setShowDeleteConfirm(false)
    }
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
                  src={`/api/serve-image?filename=${encodeURIComponent(image.filename)}`}
                  alt={image.description || "Gallery image"}
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
                  src={`/api/serve-image?filename=${encodeURIComponent(selectedImage.filename)}`}
                  alt={selectedImage.description || "Gallery image"}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=600&width=800"
                  }}
                />
              </div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowDeleteConfirm(true)
                  }}
                  title="Delete image"
                >
                  <Trash2 size={20} />
                </button>
                <button
                  className="bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                  onClick={closeLightbox}
                  title="Close"
                >
                  <X size={20} />
                </button>
              </div>
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

          {/* Delete confirmation dialog */}
          {showDeleteConfirm && (
            <div
              className="fixed inset-0 bg-black/50 z-60 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
                <div className="flex items-center text-red-500 mb-4">
                  <AlertCircle className="mr-2" />
                  <h3 className="text-lg font-semibold">Delete Image</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Are you sure you want to delete this image? This action cannot be undone.
                </p>

                {deleteError && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">{deleteError}</div>}

                <div className="flex justify-end space-x-3">
                  <button
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                    onClick={() => setShowDeleteConfirm(false)}
                    disabled={isDeleting}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex items-center"
                    onClick={() => deleteImage(selectedImage.filename)}
                    disabled={isDeleting}
                  >
                    {isDeleting ? (
                      <>
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        Deleting...
                      </>
                    ) : (
                      <>Delete</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

