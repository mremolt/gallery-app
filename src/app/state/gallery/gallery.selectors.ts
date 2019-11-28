import { createSelector } from '@ngrx/store';

import { Gallery } from './gallery.model';

export const selectGalleries = (state: any) => state.gallery.entities;

export const selectGalleryTitles = createSelector(
  selectGalleries,
  (galleries: Array<Gallery>) => galleries.map((gallery: Gallery) => gallery.title)
);
