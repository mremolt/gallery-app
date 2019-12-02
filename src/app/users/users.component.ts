import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../state/user/user.model';
import { selectLoading, selectUsers } from '../state/user/user.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  public loading$: Observable<boolean> = this.store.pipe(select(selectLoading));
  public users$: Observable<Array<User>> = this.store.pipe(select(selectUsers));

  public constructor(private readonly store: Store<any>) {}
}
