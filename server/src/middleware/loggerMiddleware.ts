import { RequestHandler } from 'express';

export const loggerMiddleware: RequestHandler = (req, _, next) => {
  const timestamp = new Date().toISOString();
  const request = {
    method: req.method,
    url: req.url,
    body: req.body.post,
    query: req.query,
    params: req.params,
  };
  console.log('Req @' + timestamp + ':', request, '\n');
  next();
};
