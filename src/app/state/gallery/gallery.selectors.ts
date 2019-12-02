import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RequestState } from '../constants/request-state.enum';
import { selectActiveUser, selectUsers } from '../user/user.selectors';
import * as fromGallery from './gallery.reducer';

export const selectGalleryState = createFeatureSelector<fromGallery.State>(
  fromGallery.galleryFeatureKey
);

export const selectGalleries = createSelector(
  selectGalleryState,
  state => state.entities
);

export const selectLoading = createSelector(
  selectGalleryState,
  state => state.requestState === RequestState.LOADING
);

export const selectLoaded = createSelector(
  selectGalleryState,
  state => state.requestState === RequestState.LOADED
);

export const selectError = createSelector(selectGalleryState, state => state.error);

export const selectGalleryTitles = createSelector(selectGalleries, galleries =>
  galleries.map(gallery => gallery.title)
);

export const selectGalleryModels = createSelector(
  [selectGalleries, selectUsers, selectActiveUser],
  (galleries, users, activeUser) => {
    if (activeUser) {
      // tslint:disable-next-line: no-parameter-reassignment
      galleries = galleries.filter(gallery => gallery.userId === activeUser.id);
    }

    return galleries.map(gallery => ({
      ...gallery,
      user: users.find(user => user.id === gallery.userId),
    }));
  }
);
