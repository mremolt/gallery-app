import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);

export const selectLoading = createSelector(
  selectUserState,
  state => state.requestState === fromUser.RequestState.LOADING
);

export const selectUsers = createSelector(selectUserState, state => state.entities);
