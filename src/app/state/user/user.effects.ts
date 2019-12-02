import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions, OnInitEffects } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

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

  public ngrxOnInitEffects(): Action {
    return UserActions.loadUsers();
  }

  public constructor(
    private readonly actions$: Actions,
    private readonly service: UserService
  ) {}
}
