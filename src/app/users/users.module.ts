import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatProgressSpinnerModule,
  ],
})
export class UsersModule {}
