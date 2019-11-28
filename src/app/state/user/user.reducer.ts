import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on, Action } from '@ngrx/store';

import * as UserActions from './user.actions';
import { User } from './user.model';

export const userFeatureKey = 'user';

export enum RequestState {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  INITIAL = 'INITIAL',
}

export interface State {
  entities: Array<User>;
  requestState: RequestState;
  error: HttpErrorResponse | undefined;
}

export const initialState: State = {
  entities: [],
  requestState: RequestState.INITIAL,
  error: undefined,
};

const userReducer = createReducer(
  initialState,

  on(UserActions.loadUsers, state => ({
    ...state,
    requestState: RequestState.LOADING,
    error: undefined,
  })),

  on(UserActions.loadUsersSuccess, (state, action) => ({
    ...state,
    requestState: RequestState.LOADED,
    entities: action.data,
  })),

  on(UserActions.loadUsersFailure, (_state, action) => ({
    ...initialState,
    error: action.error,
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return userReducer(state, action);
}
