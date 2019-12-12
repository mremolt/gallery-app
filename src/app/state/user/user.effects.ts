import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions, OnInitEffects } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { catchError, concatMap, map, filter, mapTo, delay } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import * as UserActions from './user.actions';
import { UserService } from './user.service';

@Injectable()
export class UserEffects implements OnInitEffects {
  public readonly loadUsers$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      concatMap(() =>
        this.service.load().pipe(
          map(data => UserActions.loadUsersSuccess({ data })),
          catchError(error => of(UserActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  public readonly pingPong$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      filter(action => action.type === 'PING'),
      delay(2000),
      mapTo({ type: 'PONG' })
    )
  );

  public readonly pongPing$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      filter(action => action.type === 'PONG'),
      delay(2000),
      mapTo({ type: 'PING' })
    )
  );

  public ngrxOnInitEffects(): Action {
    return UserActions.loadUsers();
  }

  public constructor(
    private readonly actions$: Actions,
    private readonly service: UserService
  ) {}
}
