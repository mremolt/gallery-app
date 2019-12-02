import { createAction, props } from '@ngrx/store';

export const loadGalleries = createAction('[Gallery] Load Galleries');

export const loadGalleriesSuccess = createAction(
  '[Gallery] Load Galleries Success',
  props<{ data: any }>()
);

export const loadGalleriesFailure = createAction(
  '[Gallery] Load Galleries Failure',
  props<{ error: any }>()
);
