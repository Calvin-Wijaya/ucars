import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./view/user/user.module').then((m) => m.UserModule),
  },
  { path: 'admin', loadChildren: () => import('./view/admin/admin.module').then(m => m.AdminModule) },
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
