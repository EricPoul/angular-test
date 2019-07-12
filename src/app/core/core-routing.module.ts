import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-users',
    pathMatch: 'full',
  },
  {
    path: 'list-users',
    loadChildren: './users-list/users-list.module#UsersListModule',
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersListRoutingModule {
}
