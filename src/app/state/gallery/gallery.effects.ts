import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions, OnInitEffects } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import * as GalleryActions from './gallery.actions';
import { GalleryService } from './gallery.service';

@Injectable()
export class GalleryEffects implements OnInitEffects {
  public loadGalleries$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(GalleryActions.loadGalleries),
      concatMap(() =>
        this.service.load().pipe(
          map(data => GalleryActions.loadGalleriesSuccess({ data })),
          catchError(error => of(GalleryActions.loadGalleriesFailure({ error })))
        )
      )
    )
  );

  public ngrxOnInitEffects(): Action {
    return GalleryActions.loadGalleries();
  }

  public constructor(
    private readonly actions$: Actions,
    private readonly service: GalleryService
  ) {}
}
