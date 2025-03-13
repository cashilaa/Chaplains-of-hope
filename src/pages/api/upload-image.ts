import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../mongodbClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, data } = req.body;

    try {
      const db = await connectToDatabase();
      const collection = db.collection('images');

      const result = await collection.insertOne({
        name,
        data,
        createdAt: new Date(),
      });

      if (result.insertedId) {
        res.status(200).json({ message: 'Image uploaded successfully', id: result.insertedId });
      } else {
        res.status(500).json({ message: 'Error uploading image' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error connecting to database', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
