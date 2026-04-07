import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/lib/db';
import { Visitor, Contact } from '@/lib/models';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await connectDB();

    // Get analytics
    const totalVisitors = await Visitor.countDocuments();
    const todayVisitors = await Visitor.countDocuments({
      timestamp: {
        $gte: new Date(new Date().setHours(0, 0, 0, 0)),
      },
    });

    const pageViews = await Visitor.aggregate([
      {
        $group: {
          _id: '$page',
          count: { $sum: 1 },
        },
      },
      {
        $sort: { count: -1 },
      },
      {
        $limit: 10,
      },
    ]);

    const totalMessages = await Contact.countDocuments();
    const unreadMessages = await Contact.countDocuments({ read: false });

    res.status(200).json({
      visitors: {
        total: totalVisitors,
        today: todayVisitors,
        byPage: pageViews,
      },
      messages: {
        total: totalMessages,
        unread: unreadMessages,
      },
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    res.status(500).json({ error: 'Failed to fetch analytics' });
  }
}
