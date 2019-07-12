import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { UserModule } from './user/user.module';
import { UsersListModule } from './users-list/users-list.module';
import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    HttpClientModule,
    UsersListModule,
    UserModule,
  ],
  declarations: [CoreComponent],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    console.log('CoreModule created');
    return {
      ngModule: CoreModule,
    };
  }
}

