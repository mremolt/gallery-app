import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { PhotosComponent } from './photos.component';

@NgModule({
  declarations: [PhotosComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class PhotosModule {}
