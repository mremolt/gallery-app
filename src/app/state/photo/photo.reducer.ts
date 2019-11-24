import { HttpErrorResponse } from '@angular/common/http';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as PhotoActions from './photo.actions';
import { Photo } from './photo.model';

export const photosFeatureKey = 'photos';

export interface State extends EntityState<Photo> {
  // additional entities state properties
  loading: boolean;
  loaded: boolean;
  error: HttpErrorResponse | undefined;
}

export interface PhotosPartialState {
  [photosFeatureKey]: State;
}

export const adapter: EntityAdapter<Photo> = createEntityAdapter<Photo>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loading: false,
  loaded: false,
  error: undefined,
});

const photoReducer = createReducer(
  initialState,
  on(PhotoActions.loadPhotos, state => ({ ...state, loading: true, loaded: false, error: undefined })),
  on(PhotoActions.loadPhotosSuccess, (state, action) =>
    adapter.addAll(action.photos, { ...state, loading: false, loaded: true })
  ),
  on(PhotoActions.loadPhotosFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(PhotoActions.addPhoto, (state, action) => adapter.addOne(action.photo, state)),
  on(PhotoActions.upsertPhoto, (state, action) => adapter.upsertOne(action.photo, state)),
  on(PhotoActions.addPhotos, (state, action) => adapter.addMany(action.photos, state)),
  on(PhotoActions.upsertPhotos, (state, action) => adapter.upsertMany(action.photos, state)),
  on(PhotoActions.updatePhoto, (state, action) => adapter.updateOne(action.photo, state)),
  on(PhotoActions.updatePhotos, (state, action) => adapter.updateMany(action.photos, state)),
  on(PhotoActions.deletePhoto, (state, action) => adapter.removeOne(action.id, state)),
  on(PhotoActions.deletePhotos, (state, action) => adapter.removeMany(action.ids, state)),
  on(PhotoActions.clearPhotos, state => adapter.removeAll(state))
);

export function reducer(state: State | undefined, action: Action): State {
  return photoReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
