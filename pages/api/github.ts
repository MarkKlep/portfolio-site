import { NextApiRequest, NextApiResponse } from 'next';
import { fetchGithubRepos } from '@/lib/github';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const username = process.env.GITHUB_USERNAME!;
    const repos = await fetchGithubRepos(username);
    res.status(200).json(repos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch repos' });
  }
}
