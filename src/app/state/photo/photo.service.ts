import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public constructor(private readonly http: HttpClient) {}

  public load(page: number = 1, limit: number = 10): Observable<Array<Photo>> {
    return this.http.get<Array<Photo>>(`${environment.apiUrl}photos?_page=${page}&_limit=${limit}`);
  }
}
