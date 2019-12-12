import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Todo } from './todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public constructor(private readonly http: HttpClient) {}

  public load(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>(`${environment.apiUrl}todos`);
  }
}
