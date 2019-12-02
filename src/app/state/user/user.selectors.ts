import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RequestState } from '../constants/request-state.enum';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);

export const selectLoading = createSelector(
  selectUserState,
  state => state.requestState === RequestState.LOADING
);

export const selectUsers = createSelector(selectUserState, state => state.entities);

export const selectActiveUserId = createSelector(
  [selectUserState],
  state => state.activeUserId
);
export const selectActiveUser = createSelector(
  [selectUsers, selectActiveUserId],
  (users, id) => users.find(user => user.id === id)
);
