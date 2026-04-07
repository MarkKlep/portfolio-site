import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/lib/db';
import { BlogPost } from '@/lib/models';
import { withMethods, withErrorHandler } from '@/lib/middleware';

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const { slug, published } = req.query;

  await connectDB();

  if (slug) {
    // Get single post by slug
    const post = await BlogPost.findOne({ slug, ...(published === 'true' && { published: true }) });
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    // Increment views
    post.views = (post.views || 0) + 1;
    await post.save();
    return res.status(200).json(post);
  }

  // Get all posts
  const posts = await BlogPost.find({ published: true }).sort({ createdAt: -1 });
  res.status(200).json(posts);
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const { title, slug, content, excerpt, tags, published } = req.body;

  if (!title || !slug || !content || !excerpt) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  await connectDB();

  // Check if slug already exists
  const existing = await BlogPost.findOne({ slug });
  if (existing) {
    return res.status(409).json({ error: 'Slug already exists' });
  }

  const post = new BlogPost({
    title,
    slug,
    content,
    excerpt,
    tags: tags || [],
    published: published || false,
    views: 0,
    likes: 0,
  });

  await post.save();
  res.status(201).json(post);
}

export default withErrorHandler(
  withMethods({
    GET: handleGet,
    POST: handlePost,
  })
);
