import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleriesComponent } from './galleries/galleries.component';
import { GalleriesModule } from './galleries/galleries.module';
import { PhotosComponent } from './photos/photos.component';
import { PhotosModule } from './photos/photos.module';
import { UsersComponent } from './users/users.component';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  { path: '', redirectTo: 'photos', pathMatch: 'full' },
  { path: 'photos', component: PhotosComponent },

  { path: 'galleries', component: GalleriesComponent },
  { path: 'galleries/:galleryId/photos', component: PhotosComponent },

  { path: 'users', component: UsersComponent },
  { path: 'users/:userId/galleries', component: GalleriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PhotosModule, GalleriesModule, UsersModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
