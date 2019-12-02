import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectGalleryModels } from '../gallery/gallery.selectors';
import { photosFeatureKey, selectAll, State } from './photo.reducer';

export const selectPhotoState = createFeatureSelector<State>(photosFeatureKey);

export const selectLoading = createSelector(selectPhotoState, state => state.loading);
export const selectLoaded = createSelector(selectPhotoState, state => state.loaded);
export const selectError = createSelector(selectPhotoState, state => state.error);
export const selectPhotos = createSelector(selectPhotoState, selectAll);

export const selectPhotoModels = createSelector(
  [selectPhotos, selectGalleryModels],
  (photos, galleries) =>
    photos.map(photo => ({
      ...photo,
      gallery: galleries.find(gallery => gallery.id === photo.albumId),
    }))
);
