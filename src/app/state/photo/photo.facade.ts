import { HttpErrorResponse } from '@angular/common/http';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { loadPhotos } from './photo.actions';
import { PhotoModel } from './photo.model';
import { PhotosPartialState } from './photo.reducer';
import {
  selectError,
  selectLoaded,
  selectLoading,
  selectPhotoModels,
} from './photo.selectors';

@Injectable({ providedIn: 'root' })
export class PhotoFacade {
  public readonly loading$: Observable<boolean> = this.store.pipe(select(selectLoading));
  public readonly loaded$: Observable<boolean> = this.store.pipe(select(selectLoaded));
  public readonly error$: Observable<HttpErrorResponse | undefined> = this.store.pipe(
    select(selectError)
  );
  public readonly photos$: Observable<Array<PhotoModel>> = this.store.pipe(
    select(selectPhotoModels)
  );

  public constructor(private readonly store: Store<PhotosPartialState>) {}

  public load(page: number, limit: number, galleryId?: number): void {
    this.store.dispatch(loadPhotos({ page, limit, galleryId }));
  }
}
