import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const loadUsers = createAction('[User] Load Users');

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: Array<User> }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);

export const setActiveUserId = createAction(
  '[User] Set Active User',
  props<{ activeUserId: number }>()
);

export const resetUsers = createAction('[User] Reset Users');
