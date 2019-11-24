import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

import { PhotosComponent } from './photos.component';

@NgModule({
  declarations: [PhotosComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatPaginatorModule],
})
export class PhotosModule {}
