import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { PhotosModule } from './photos/photos.module';

const routes: Routes = [
  { path: '', redirectTo: 'photos', pathMatch: 'full' },
  { path: 'photos', component: PhotosComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), PhotosModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
