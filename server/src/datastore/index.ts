import { UserDao } from './dao/UserDao';
import { PostDao } from './dao/PostDao';
import { LikeDao } from './dao/LikeDao';
import { CommentDao } from './dao/CommentDao';
import { InMemoryDatabase } from './memorydb';

export interface Datastore extends UserDao, PostDao, LikeDao, CommentDao {}

export const db = new InMemoryDatabase(); // singleton memory database
