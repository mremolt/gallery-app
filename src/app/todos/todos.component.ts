import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { loadTodos } from '../state/todo/todo.actions';
import { TodoModel } from '../state/todo/todo.interface';
import { selectTodosModels } from '../state/todo/todo.selectors';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent implements OnInit {
  public readonly todos$: Observable<Array<TodoModel>> = this.store.pipe(
    select(selectTodosModels)
  );

  public constructor(private readonly store: Store<any>) {}

  public ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }
}
