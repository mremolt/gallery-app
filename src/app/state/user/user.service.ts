import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public constructor(private readonly http: HttpClient) {}

  public load(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${environment.apiUrl}users`);
  }
}
