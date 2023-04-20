import express from 'express';
import { db } from './datastore';
import { loggerMiddleware } from './middleware/loggerMiddleware';

const app = express();

app.use(express.json());

app.use(loggerMiddleware);

app.get('/posts', (req, res) => {
  res.send({ posts: db.listPosts() });
});

app.post('/posts/new', (req, res) => {
  db.createPost(req.body.post);
  res.sendStatus(201);
});

app.listen(3000);
