"use client";

import { useState } from 'react';

export default function ImageUploadForm() {
  const [image, setImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    setUploading(true);

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result;
      const response = await fetch('/api/upload-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: image.name,
          data: base64String,
        }),
      });

      const result = await response.json();
      setUploading(false);

      if (response.ok) {
        console.log('Image uploaded successfully:', result.id);
      } else {
        console.error('Error uploading image:', result.message);
      }
    };
    reader.readAsDataURL(image);
  };

  return (
    <div className="image-upload-form">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>
    </div>
  );
}
