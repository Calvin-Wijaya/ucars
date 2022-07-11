import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserMobileComponent } from './user-mobile.component';

const routes: Routes = [{ path: '', component: UserMobileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMobileRoutingModule { }
