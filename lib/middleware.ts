import { NextApiRequest, NextApiResponse } from 'next';

export function withCors(handler: Function) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }

    return handler(req, res);
  };
}

export function withMethods(handler: Record<string, Function>) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const method = req.method?.toUpperCase();
    const methodHandler = handler[method as string];

    if (!methodHandler) {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    try {
      return await methodHandler(req, res);
    } catch (error) {
      console.error(`Error in ${method}:`, error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
}

export function withErrorHandler(handler: Function) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      return await handler(req, res);
    } catch (error: any) {
      console.error('Error:', error);
      res.status(error.status || 500).json({
        error: error.message || 'Internal server error',
      });
    }
  };
}

export function compose(...middlewares: Function[]) {
  return (handler: Function) => {
    return middlewares.reduceRight((acc, middleware) => middleware(acc), handler);
  };
}
