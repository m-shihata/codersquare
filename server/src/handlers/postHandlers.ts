import { db } from '../datastore';
import { Post } from '../types';
import crypto from 'crypto';
import { ExpressHandler } from '../types';

export const listPostsHandler: ExpressHandler<{}, {}> = (req, res) => {
  res.send({ posts: db.listPosts() });
};

type CreatePostRequest = Pick<Post, 'title' | 'url' | 'userId'>;

interface CreatePostResponse {}

export const createPostHandler: ExpressHandler<CreatePostRequest, CreatePostResponse> = (
  req,
  res
) => {
  if (!req.body.title || !req.body.url || !req.body.userId) {
    return res.sendStatus(400);
  }

  const post: Post = {
    id: crypto.randomBytes(16).toString('hex'),
    title: req.body.title,
    url: req.body.url,
    userId: req.body.userId,
    postedAt: Date.now(),
  };
  db.createPost(post);
  res.sendStatus(201);
};
