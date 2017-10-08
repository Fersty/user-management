import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list.component';
import { UserFormComponent } from './components/user-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { UserService } from '../app/services/user.service'

import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    PaginationModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
