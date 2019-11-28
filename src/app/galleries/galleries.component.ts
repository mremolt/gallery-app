import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Gallery } from '../state/gallery/gallery.model';
import { selectGalleries, selectGalleryTitles } from '../state/gallery/gallery.selectors';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleriesComponent implements OnDestroy {
  public galleries: Array<Gallery> = [];
  public readonly galleries$: Observable<Array<Gallery>> = this.store.pipe(select(selectGalleries));

  private readonly onDestroy$: Subject<undefined> = new Subject();

  public constructor(private readonly store: Store<any>) {
    this.store
      .pipe(select(selectGalleryTitles), takeUntil(this.onDestroy$))
      .subscribe(galleries => {
        console.log('wefgezh4z4z4z', galleries);
      });

    this.store.dispatch({
      type: 'GALLERY Create',
      gallery: { userId: 1, id: 12, title: 'Gallery 12' },
    });
    this.store.dispatch({
      type: 'GALLERY Create',
      gallery: { userId: 1, id: 13, title: 'Gallery 13' },
    });
    this.store.dispatch({
      type: 'GALLERY Create',
      gallery: { userId: 1, id: 14, title: 'Gallery 14' },
    });

    setTimeout(() => {
      this.store.dispatch({
        type: 'GALLERY Create',
        gallery: { userId: 1, id: 14, title: 'Gallery 14' },
      });
    }, 3000);
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
