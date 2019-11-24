import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';

import { PhotoFacade } from '../state/photo/photo.facade';

import { takeUntil } from 'rxjs/operators';
import { RouterFacade } from '../state/router/router.facde';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosComponent implements OnInit, OnDestroy {
  private readonly onDestroy$: Subject<undefined> = new Subject();

  public constructor(public readonly photoFacade: PhotoFacade, private readonly routerFacade: RouterFacade) {}

  public ngOnInit(): void {
    this.photoFacade.load(1, 10);

    this.routerFacade.routeParams$.pipe(takeUntil(this.onDestroy$)).subscribe(params => {
      console.log(params);
    });
  }

  public setPage(page: PageEvent): void {
    console.log('Page', page);
    this.photoFacade.load(page.pageIndex + 1, page.pageSize);
  }

  // tslint:disable-next-line: no-empty
  public ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
