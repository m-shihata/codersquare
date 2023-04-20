import express from 'express';
import { loggerMiddleware } from './middleware/loggerMiddleware';
import { listPostsHandler, createPostHandler } from './handlers/postHandlers';

const app = express();

app.use(express.json());

app.use(loggerMiddleware);

app.get('/posts', listPostsHandler);

app.post('/posts/new', createPostHandler);

app.listen(3000);
