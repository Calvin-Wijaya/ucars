import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMobileRoutingModule } from './user-mobile-routing.module';
import { UserMobileComponent } from './user-mobile.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [UserMobileComponent],
  imports: [CommonModule, UserMobileRoutingModule, MaterialModule],
})
export class UserMobileModule {}
