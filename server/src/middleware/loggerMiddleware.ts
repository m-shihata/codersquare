import { RequestHandler } from 'express';

export const loggerMiddleware: RequestHandler = (req: any, res: any, next: any) => {
  const timestamp = new Date().toISOString();
  const request = {
    method: req.method,
    url: req.url,
    body: req.body.post,
    query: req.query,
    params: req.params,
  };
  console.log({
    timestamp,
    request,
  });
  next();
};
