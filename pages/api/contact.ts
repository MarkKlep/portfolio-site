import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/lib/db';
import { Contact } from '@/lib/models';
import { withErrorHandler, withMethods } from '@/lib/middleware';

async function handleGet(_req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  const messages = await Contact.find().sort({ createdAt: -1 }).limit(50);
  res.status(200).json(messages);
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  await connectDB();
  const contact = new Contact({ name, email, subject, message });
  await contact.save();

  // TODO: Send email notification to admin
  res.status(201).json({ message: 'Message sent successfully', data: contact });
}

export default withErrorHandler(
  withMethods({
    GET: handleGet,
    POST: handlePost,
  })
);
