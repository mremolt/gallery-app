import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import * as TodoActions from './todo.actions';
import { TodoService } from './todo.service';

@Injectable()
export class TodoEffects {
  public loadTodos$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      concatMap(() =>
        this.todoService.load().pipe(
          map(data => TodoActions.loadTodosSuccess({ data })),
          catchError(error => of(TodoActions.loadTodosFailure({ error })))
        )
      )
    )
  );

  public constructor(
    private readonly actions$: Actions,
    private readonly todoService: TodoService
  ) {}
}
