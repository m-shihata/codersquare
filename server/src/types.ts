import { RequestHandler } from 'express';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface Post {
  id: string;
  title: string;
  url: string;
  userId: string;
  postedAt: number;
}

export interface Like {
  userId: string;
  postId: string;
}

export interface Comment {
  id: string;
  comment: string;
  userId: string;
  postId: string;
  postedAt: number;
}

export type ExpressHandler<Req, Res> = RequestHandler<string, Req, Partial<Req>, Partial<Res>, any>;
