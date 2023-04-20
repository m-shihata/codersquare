import { User } from '../../types';

export interface UserDao {
  getUserByUsername(username: string): User | undefined;
  getUserByEmail(email: string): User | undefined;
  createUser(user: User): void;
}
