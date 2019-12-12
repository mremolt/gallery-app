import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { HttpClientModule } from '@angular/common/http';

import { PhotoEffects } from './photo/photo.effects';
import * as fromPhoto from './photo/photo.reducer';

import { GalleryEffects } from './gallery/gallery.effects';
import * as fromGallery from './gallery/gallery.reducer';

import { UserEffects } from './user/user.effects';
import * as fromUser from './user/user.reducer';
import * as fromTodo from './todo/todo.reducer';
import { TodoEffects } from './todo/todo.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,

    EffectsModule.forFeature([PhotoEffects, UserEffects, GalleryEffects, TodoEffects]),

    StoreModule.forFeature('router', routerReducer),
    StoreModule.forFeature(fromPhoto.photosFeatureKey, fromPhoto.reducer),
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    StoreModule.forFeature(fromGallery.galleryFeatureKey, fromGallery.reducer),
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.reducer),
  ],
})
export class StateModule {}
