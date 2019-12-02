import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GalleryEffects } from './gallery.effects';

describe('GalleryEffects', () => {
  let actions$: Observable<any>;
  let effects: GalleryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GalleryEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<GalleryEffects>(GalleryEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
