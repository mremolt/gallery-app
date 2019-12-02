import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Gallery, GalleryModel } from '../state/gallery/gallery.model';
import { selectGalleryModels } from '../state/gallery/gallery.selectors';
import { RouterFacade } from '../state/router/router.facde';
import { setActiveUserId } from '../state/user/user.actions';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleriesComponent implements OnInit, OnDestroy {
  public galleries: Array<Gallery> = [];
  public readonly galleries$: Observable<Array<GalleryModel>> = this.store.pipe(
    select(selectGalleryModels)
  );

  private readonly onDestroy$: Subject<undefined> = new Subject();

  public constructor(
    private readonly store: Store<any>,
    private readonly routerFacade: RouterFacade
  ) {}

  public ngOnInit(): void {
    this.routerFacade.routeParams$.pipe(takeUntil(this.onDestroy$)).subscribe(params => {
      this.store.dispatch(setActiveUserId({ activeUserId: params.userId }));
    });
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
