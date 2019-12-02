import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on, Action } from '@ngrx/store';
import { RequestState } from '../constants/request-state.enum';
import * as GalleryActions from './gallery.actions';
import { Gallery } from './gallery.model';

export const galleryFeatureKey = 'gallery';

export interface State {
  entities: Array<Gallery>;
  requestState: RequestState;
  error: HttpErrorResponse | undefined;
}

export const initialState: State = {
  entities: [],
  requestState: RequestState.INITIAL,
  error: undefined,
};

const galleryReducer = createReducer(
  initialState,

  on(GalleryActions.loadGalleries, state => ({
    ...state,
    requestState: RequestState.LOADING,
    error: undefined,
  })),
  on(GalleryActions.loadGalleriesSuccess, (state, action) => ({
    ...state,
    requestState: RequestState.LOADED,
    entities: action.data,
  })),
  on(GalleryActions.loadGalleriesFailure, (_state, action) => ({
    ...initialState,
    error: action.error,
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return galleryReducer(state, action);
}
