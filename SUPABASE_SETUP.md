# Supabase Storage Setup for Image Uploads

This project uses Supabase for storing and serving uploaded images. Follow these steps to set up your Supabase project for image storage.

## 1. Create a Supabase Project

1. Go to [Supabase](https://supabase.com/) and sign up or log in
2. Create a new project
3. Note your project URL and anon key (public API key)

## 2. Set Up Storage

1. In your Supabase dashboard, go to the "Storage" section
2. Create a new bucket called `images`
3. Set the bucket's privacy settings:
   - For public access (recommended for this app): Set to "Public"
   - For restricted access: Set to "Private" and configure RLS policies

## 3. Configure Environment Variables

1. Copy the `.env.local.example` file to `.env.local`
2. Fill in your Supabase URL and anon key:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

## 4. Storage Structure

Images are stored in the following structure:
- Bucket: `images`
- Path format: `{programId}/{timestamp}-{filename}`

## 5. Migrating Existing Images

If you have existing images stored in the filesystem, you can migrate them to Supabase by:

1. Create a script that reads images from your local storage
2. Upload each image to Supabase using the Storage API
3. Update any references in your database to point to the new Supabase URLs

## Security Considerations

- The Supabase anon key is public and can be seen by clients
- Use Row Level Security (RLS) policies to control access to your storage bucket
- For write operations, consider implementing server-side validation