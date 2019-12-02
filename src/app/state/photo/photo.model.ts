import { GalleryModel } from '../gallery/gallery.model';

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface PhotoModel extends Photo {
  gallery: GalleryModel | undefined;
}
