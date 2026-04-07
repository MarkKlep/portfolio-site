// pages/api/hello.ts - Example of a simple API route for interviews
import type { NextApiRequest, NextApiResponse } from 'next';

interface ApiResponse {
  message: string;
  timestamp: string;
  version: string;
}

/**
 * Example API route demonstrating:
 * - Proper API structure
 * - HTTP method handling
 * - Type safety with TypeScript
 * - Documentation comments
 * 
 * This shows good code quality for FAANG interviews
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  if (req.method !== 'GET') {
    res.status(405).end();
    return;
  }

  res.status(200).json({
    message: 'Portfolio API is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
}
