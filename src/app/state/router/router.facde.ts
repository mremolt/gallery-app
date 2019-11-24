import { Injectable } from '@angular/core';
import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

export const selectRouter = createFeatureSelector<any, RouterReducerState<any>>('router');

const {
  selectRouteParams, // select the current route params
  selectUrl, // select the current url
} = getSelectors(selectRouter);

@Injectable({ providedIn: 'root' })
export class RouterFacade {
  public readonly routeParams$: Observable<ReturnType<typeof selectRouteParams>> = this.store.pipe(
    select(selectRouteParams)
  );
  public readonly url$: Observable<string> = this.store.pipe(select(selectUrl));
  public constructor(private readonly store: Store<{ router: RouterReducerState }>) {}
}
