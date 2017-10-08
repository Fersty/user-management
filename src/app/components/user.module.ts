import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { UserFormComponent } from './user-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { UserService } from '../services/user.service'

import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
    declarations: [
        UserListComponent,
        UserFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [

    ],
    bootstrap: [UserListComponent]
})
export class AppModule {

}
