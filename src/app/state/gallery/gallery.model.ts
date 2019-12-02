import { User } from '../user/user.model';

export interface Gallery {
  userId: number;
  id: number;
  title: string;
}

export interface GalleryModel extends Gallery {
  user: User | undefined;
}
