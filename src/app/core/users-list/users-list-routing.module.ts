import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../../core/users-list/components/list/list.component';
import { UsersResolver } from '../../shared/resolvers/user.resolver';
import { PaginationResolver } from '../../shared/resolvers/pagination.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      users: UsersResolver,
      paginationInfo: PaginationResolver,
    },
    component: ListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersListRoutingModule {
}
