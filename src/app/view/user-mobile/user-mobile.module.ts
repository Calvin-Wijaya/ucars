import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMobileRoutingModule } from './user-mobile-routing.module';
import { UserMobileComponent } from './user-mobile.component';


@NgModule({
  declarations: [
    UserMobileComponent
  ],
  imports: [
    CommonModule,
    UserMobileRoutingModule
  ]
})
export class UserMobileModule { }
