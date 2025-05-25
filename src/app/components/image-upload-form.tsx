"use client"

import type React from "react"

import { useState, useRef } from "react"
import { usePathname } from "next/navigation"

export default function ImageUploadForm() {
  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [description, setDescription] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [uploadResults, setUploadResults] = useState<any>(null)
  const [errorMessage, setErrorMessage] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const pathname = usePathname()
  // Extract the program ID from the URL path (last segment)
  const segments = pathname?.split("/") || []
  const programId = segments[segments.length - 1] || ""

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return

    // Clear previous selections
    setSelectedImages([])
    setUploadSuccess(false)
    setErrorMessage("")

    // Check each file
    const validFiles: File[] = []
    const fileReaders: FileReader[] = []
    let hasError = false

    Array.from(files).forEach(file => {
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("One or more files exceed the 5MB size limit")
        hasError = true
        return
      }
      validFiles.push(file)
    })

    if (hasError) {
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
      return
    }

    // Create preview for each valid file
    validFiles.forEach(file => {
      const reader = new FileReader()
      fileReaders.push(reader)
      
      reader.onloadend = () => {
        setSelectedImages(prev => [...prev, reader.result as string])
      }
      reader.readAsDataURL(file)
    })
  }

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!fileInputRef.current?.files?.length) {
      setErrorMessage("Please select at least one image to upload")
      return
    }

    setIsUploading(true)
    setErrorMessage("")
    setUploadResults(null)

    try {
      const formData = new FormData()
      
      // Append all files
      Array.from(fileInputRef.current.files).forEach(file => {
        formData.append("files", file)
      })
      
      formData.append("description", description)
      formData.append("programId", programId)

      console.log(`Uploading ${fileInputRef.current.files.length} images to program:`, programId)

      const response = await fetch("/api/uploads", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const text = await response.text()
        console.error("Server response:", text)
        throw new Error(`HTTP error ${response.status}`)
      }

      const result = await response.json()
      console.log("Upload successful:", result)

      setUploadSuccess(true)
      setUploadResults(result)
      setSelectedImages([])
      setDescription("")
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }

      // Trigger a refresh of the gallery if needed
      window.dispatchEvent(new CustomEvent("imageUploaded"))
    } catch (error) {
      console.error("Error uploading images:", error)
      setErrorMessage(error instanceof Error ? error.message : "Failed to upload images. Please try again.")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700">
          Upload Images
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          multiple
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
        />
        <p className="text-xs text-gray-500">Maximum file size: 5MB per image. Supported formats: JPG, PNG, GIF.</p>
      </div>

      {selectedImages.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Preview ({selectedImages.length} images):</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {selectedImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Preview ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg border border-gray-200"
              />
            ))}
          </div>
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description (applies to all images)
        </label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Add a description for these images..."
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
      </div>

      {errorMessage && (
        <div className="text-red-500 text-sm p-3 bg-red-50 rounded-md border border-red-100">{errorMessage}</div>
      )}

      {uploadSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
          <p className="font-medium">Upload successful!</p>
          {uploadResults && (
            <p className="mt-1">
              {uploadResults.successfulUploads} of {uploadResults.totalFiles} images uploaded successfully.
            </p>
          )}
        </div>
      )}

      <button
        type="submit"
        disabled={isUploading}
        className={`w-full bg-green-600 text-white py-2 px-4 rounded-md font-medium hover:bg-green-700 transition-colors ${
          isUploading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {isUploading ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Uploading...
          </span>
        ) : (
          "Upload Images"
        )}
      </button>
    </form>
  )
}
