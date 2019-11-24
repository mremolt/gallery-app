import { createFeatureSelector, createSelector } from '@ngrx/store';
import { photosFeatureKey, selectAll, State } from './photo.reducer';

export const selectPhotoState = createFeatureSelector<State>(photosFeatureKey);

export const selectLoading = createSelector(selectPhotoState, state => state.loading);
export const selectLoaded = createSelector(selectPhotoState, state => state.loaded);
export const selectError = createSelector(selectPhotoState, state => state.error);
export const selectPhotos = createSelector(selectPhotoState, selectAll);
