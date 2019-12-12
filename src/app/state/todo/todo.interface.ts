import { User } from '../user/user.model';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoModel extends Todo {
  user: User | undefined;
}
