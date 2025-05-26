import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/mongoDb/client';
import Region from '@/mongoDb/models/region';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  const genres = await Region.find({});
  res.status(200).json(genres);
}