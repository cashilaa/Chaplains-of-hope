import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, data } = req.body;

    if (!name || !data) {
        return res.status(400).json({ message: 'Missing image name or data' });
    }

    try {
        const base64Data = data.replace(/^data:image\/\w+;base64,/, '');
        const buffer = Buffer.from(base64Data, 'base64');
        const uploadsDir = path.join(process.cwd(), 'uploads');

        if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir);
        }

        const filePath = path.join(uploadsDir, name);
        fs.writeFileSync(filePath, buffer);

        return res.status(200).json({ message: 'Image uploaded successfully', path: filePath });
    } catch (error) {
        console.error('Error uploading image:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
