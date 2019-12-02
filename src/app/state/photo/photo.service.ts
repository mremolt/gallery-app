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

  public load(
    page: number = 1,
    limit: number = 10,
    galleryId?: number
  ): Observable<Array<Photo>> {
    let baseUrl: string = environment.apiUrl;

    if (galleryId) {
      baseUrl += `albums/${galleryId}/photos`;
    } else {
      baseUrl += 'photos';
    }

    return this.http.get<Array<Photo>>(`${baseUrl}?_page=${page}&_limit=${limit}`);
  }
}
