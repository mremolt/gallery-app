import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { HttpClientModule } from '@angular/common/http';
import { PhotoEffects } from './photo/photo.effects';
import * as fromPhoto from './photo/photo.reducer';

import { galleryReducer } from './gallery/gallery.reducer';
import * as fromUser from './user/user.reducer';
import { UserEffects } from './user/user.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,

    EffectsModule.forFeature([PhotoEffects, UserEffects]),

    StoreModule.forFeature('router', routerReducer),
    StoreModule.forFeature('gallery', galleryReducer),
    StoreModule.forFeature(fromPhoto.photosFeatureKey, fromPhoto.reducer),
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
  ],
})
export class StateModule {}
