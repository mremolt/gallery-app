import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on, Action } from '@ngrx/store';

import { RequestState } from '../constants/request-state.enum';
import * as TodoActions from './todo.actions';
import { Todo } from './todo.interface';

export const todoFeatureKey = 'todo';

export interface State {
  entities: Array<Todo>;
  requestState: RequestState;
  error: HttpErrorResponse | undefined;
}

export const initialState: State = {
  entities: [],
  requestState: RequestState.INITIAL,
  error: undefined,
};

const todoReducer = createReducer(
  initialState,

  on(TodoActions.loadTodos, state => ({ ...state, requestState: RequestState.LOADING })),
  on(TodoActions.loadTodosSuccess, (state, action) => ({
    ...state,
    entities: action.data,
    requestState: RequestState.LOADED,
  })),
  on(TodoActions.loadTodosFailure, (_state, { error }) => ({
    ...initialState,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return todoReducer(state, action);
}
