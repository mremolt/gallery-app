import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleriesComponent {
  public galleries: Array<number> = [1, 2, 3, 4, 5];
}
