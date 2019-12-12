import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodo from './todo.reducer';
import { selectUsers } from '../user/user.selectors';

export const selectTodoState = createFeatureSelector<fromTodo.State>(
  fromTodo.todoFeatureKey
);

export const selectError = createSelector(selectTodoState, state => state.error);
export const selectTodos = createSelector(selectTodoState, state => state.entities);

export const selectTodosModels = createSelector(
  selectTodos,
  selectUsers,
  (todos, users) =>
    todos.map(todo => ({
      ...todo,
      user: users.find(user => user.id === todo.userId),
    }))
);
