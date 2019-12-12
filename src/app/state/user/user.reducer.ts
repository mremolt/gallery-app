import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on, Action } from '@ngrx/store';

import { RequestState } from '../constants/request-state.enum';
import * as UserActions from './user.actions';
import { User } from './user.model';

export const userFeatureKey = 'user';

// export interface State {
//   entities: Array<User>;
//   requestState: RequestState;
//   error: HttpErrorResponse | undefined;
//   activeUserId: number | undefined;
// }

export type State = Readonly<{
  entities: ReadonlyArray<User>;
  requestState: RequestState;
  error: HttpErrorResponse | undefined;
  activeUserId: number | undefined;
}>;

export const initialState: State = {
  entities: [],
  requestState: RequestState.INITIAL,
  error: undefined,
  activeUserId: undefined,
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

  // on(UserActions.loadUsersFailure, (_state, action) => ({
  on(UserActions.loadUsersFailure, (_state, { error }) => ({
    ...initialState,
    error,
  })),

  on(UserActions.setActiveUserId, (state, { activeUserId }) => ({
    ...state,
    activeUserId: Number(activeUserId),
  })),

  on(UserActions.resetUsers, () => initialState)
);

export function reducer(state: State | undefined, action: Action): State {
  return userReducer(state, action);
}
