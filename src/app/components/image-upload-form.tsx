"use client"

import type React from "react"

import { useState, useRef } from "react"
import { usePathname } from "next/navigation"

export default function ImageUploadForm() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [description, setDescription] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const pathname = usePathname()
  // Extract the program ID from the URL path (last segment)
  const segments = pathname?.split("/") || []
  const programId = segments[segments.length - 1] || ""

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("File size exceeds 5MB limit")
        if (fileInputRef.current) {
          fileInputRef.current.value = ""
        }
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
      setUploadSuccess(false)
      setErrorMessage("")
    }
  }

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!fileInputRef.current?.files?.length) {
      setErrorMessage("Please select an image to upload")
      return
    }

    setIsUploading(true)
    setErrorMessage("")

    try {
      const formData = new FormData()
      formData.append("file", fileInputRef.current.files[0])
      formData.append("description", description)
      formData.append("programId", programId)

      console.log("Uploading to program:", programId)

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
      setSelectedImage(null)
      setDescription("")
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }

      // Trigger a refresh of the gallery if needed
      window.dispatchEvent(new CustomEvent("imageUploaded"))
    } catch (error) {
      console.error("Error uploading image:", error)
      setErrorMessage(error instanceof Error ? error.message : "Failed to upload image. Please try again.")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700">
          Upload an Image
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
        />
        <p className="text-xs text-gray-500">Maximum file size: 5MB. Supported formats: JPG, PNG, GIF.</p>
      </div>

      {selectedImage && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Preview:</p>
          <img
            src={selectedImage || "/placeholder.svg"}
            alt="Preview"
            className="max-w-full h-auto max-h-64 rounded-lg border border-gray-200"
          />
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Add a description for this image..."
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
      </div>

      {errorMessage && (
        <div className="text-red-500 text-sm p-3 bg-red-50 rounded-md border border-red-100">{errorMessage}</div>
      )}

      {uploadSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
          Image uploaded successfully!
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
          "Upload Image"
        )}
      </button>
    </form>
  )
}
