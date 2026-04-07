import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/lib/db';
import { Visitor } from '@/lib/models';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { page } = req.body;
  if (!page) {
    return res.status(400).json({ error: 'Missing page parameter' });
  }

  try {
    await connectDB();
    
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    const userAgent = req.headers['user-agent'] || 'unknown';
    const referer = req.headers['referer'] || undefined;

    const visitor = new Visitor({
      ip: Array.isArray(ip) ? ip[0] : ip,
      userAgent,
      page,
      referer,
      timestamp: new Date(),
    });

    await visitor.save();
    res.status(201).json({ success: true });
  } catch (error) {
    console.error('Error tracking visitor:', error);
    res.status(500).json({ error: 'Failed to track visitor' });
  }
}
