import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loadUsers, loadUsersSuccess } from '../state/user/user.actions';
import { selectLoading, selectUsers } from '../state/user/user.selectors';
import { User } from '../state/user/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  public users: Array<number> = [1, 2, 3, 4, 5, 6];

  public loading$: Observable<boolean> = this.store.pipe(select(selectLoading));
  public users$: Observable<Array<User>> = this.store.pipe(select(selectUsers));

  public constructor(private readonly store: Store<any>) {}

  public ngOnInit(): void {
    this.store.dispatch(loadUsers());

    setTimeout(() => {
      this.store.dispatch(loadUsersSuccess({ data: [1, 2, 3, 4, 5] }));
    }, 3000);
  }
}
