import { User, Post, Like, Comment } from '../../types';
import { Datastore } from '..';

export class InMemoryDatabase implements Datastore {
  private users: User[] = [];
  private posts: Post[] = [];
  private likes: Like[] = [];
  private comments: Comment[] = [];

  getUserByUsername(username: string): User | undefined {
    return this.users.find(user => user.username === username);
  }
  getUserByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }
  createUser(user: User): void {
    this.users.push(user);
  }
  listPosts(): Post[] {
    return this.posts;
  }
  createPost(post: Post): void {
    this.posts.push(post);
  }
  getPost(id: string): Post | undefined {
    return this.posts.find(post => post.id === id);
  }
  deletePost(id: string): void {
    const index = this.posts.findIndex(post => post.id === id);
    if (index === -1) return;
    this.posts.splice(index, 1);
  }
  createLike(like: Like): void {
    this.likes.push(like);
  }
  listComments(postId: string): Comment[] {
    return this.comments.filter(comment => comment.postId === postId);
  }
  createComment(comment: Comment): void {
    this.comments.push(comment);
  }
  deleteComment(id: string): void {
    const index = this.comments.findIndex(comment => comment.id === id);
    if (index === -1) return;
    this.comments.splice(index, 1);
  }
}
