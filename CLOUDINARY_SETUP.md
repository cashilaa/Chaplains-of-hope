# Cloudinary Setup for Image Uploads

This project uses Cloudinary for storing and serving uploaded images. Follow these steps to set up your Cloudinary account for image storage.

## 1. Create a Cloudinary Account

1. Go to [Cloudinary](https://cloudinary.com/) and sign up for a free account
2. After signing up, you'll be taken to your dashboard where you can find your account details

## 2. Get Your Cloudinary Credentials

1. In your Cloudinary dashboard, look for the "Account Details" section
2. Note your Cloud Name, API Key, and API Secret

## 3. Configure Environment Variables

1. Copy the `.env.local.example` file to `.env.local`
2. Fill in your Cloudinary credentials:
   ```
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   ```

## 4. Storage Structure

Images are stored in Cloudinary with the following structure:
- Folder: `{programId}`
- Filename format: `{timestamp}-{filename}`

## 5. Image Transformations

Cloudinary offers powerful image transformation capabilities that you can use to optimize your images:

- Resize images on-the-fly by adding parameters to the URL
- Apply filters and effects
- Crop and manipulate images
- Optimize for different devices

Example transformation URL:
```
https://res.cloudinary.com/your-cloud-name/image/upload/w_300,h_200,c_crop/your-image-path
```

## 6. Migrating Existing Images

If you have existing images stored in Supabase, you can migrate them to Cloudinary by:

1. Download the images from Supabase
2. Upload each image to Cloudinary using the same folder structure
3. Update any references in your database to point to the new Cloudinary URLs

## Security Considerations

- Keep your API Secret secure and never expose it in client-side code
- Use signed URLs for private content
- Set up proper upload presets for client-side uploads if needed