import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { GalleriesComponent } from './galleries.component';

@NgModule({
  declarations: [GalleriesComponent],
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
})
export class GalleriesModule {}
