import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule, MatTableModule } from '@angular/material';
import { PaginationResolver } from '../../shared/resolvers/pagination.resolver';
import { UsersResolver } from '../../shared/resolvers/user.resolver';
import { ListComponent } from './components/list/list.component';

import { UsersListRoutingModule } from './users-list-routing.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    UsersListRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    FlexLayoutModule,
  ],
  providers: [
    UsersResolver,
    PaginationResolver,
  ],
})
export class UsersListModule {
}
