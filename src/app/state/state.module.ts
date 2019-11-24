import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { HttpClientModule } from '@angular/common/http';
import { PhotoEffects } from './photo/photo.effects';
import * as fromPhoto from './photo/photo.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,

    EffectsModule.forFeature([PhotoEffects]),

    StoreModule.forFeature('router', routerReducer),
    StoreModule.forFeature(fromPhoto.photosFeatureKey, fromPhoto.reducer),
  ],
})
export class StateModule {}
