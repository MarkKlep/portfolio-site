import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/lib/db';
import { Project } from '@/lib/models';
import { withMethods, withErrorHandler } from '@/lib/middleware';

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  const { featured } = req.query;

  let query = {};
  if (featured === 'true') {
    query = { featured: true };
  }

  const projects = await Project.find(query).sort({ startDate: -1 });
  res.status(200).json(projects);
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const { title, description, link, tags, featured, github } = req.body;

  if (!title || !description || !link) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  await connectDB();
  const project = new Project({
    title,
    description,
    link,
    tags: tags || [],
    featured: featured || false,
    github,
    startDate: new Date(),
  });

  await project.save();
  res.status(201).json(project);
}

export default withErrorHandler(
  withMethods({
    GET: handleGet,
    POST: handlePost,
  })
);
