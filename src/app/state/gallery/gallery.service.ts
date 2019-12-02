import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Gallery } from './gallery.model';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  public constructor(private readonly http: HttpClient) {}

  public load(): Observable<Array<Gallery>> {
    return this.http.get<Array<Gallery>>(`${environment.apiUrl}albums`);
  }
}
