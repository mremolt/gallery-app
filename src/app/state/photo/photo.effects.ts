import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { of, Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { loadPhotos, loadPhotosFailure, loadPhotosSuccess } from './photo.actions';
import { PhotoService } from './photo.service';

@Injectable()
export class PhotoEffects {
  public loadPhotos: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPhotos),
      switchMap(action =>
        this.service.load(action.page, action.limit, action.galleryId).pipe(
          map(photos => loadPhotosSuccess({ photos })),
          catchError(error => of(loadPhotosFailure({ error })))
        )
      )
    )
  );

  public constructor(
    private readonly actions$: Actions,
    private readonly service: PhotoService
  ) {}
}
