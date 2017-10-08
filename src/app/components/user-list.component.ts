import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';

import { UserFormComponent } from '../components/user-form.component';
import { User } from '../components/user.model'

import { UserService } from '../services/user.service'

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['user-list.component.css']
})

export class UserListComponent implements OnInit {

  @ViewChild(UserFormComponent) userForm: UserFormComponent;
  public users;
  public totalItems;
  public currentPage: number = 1;
  public filterByName: string;
  public filterByGender: string;
  public userModel: User;

  constructor(private userService: UserService) { }

  public ngOnInit() {
    this.changePage(0, 10, null, null);
  }

  public pageChanged(event: any): void {
    this.changePage((event.page - 1) * event.itemsPerPage, event.itemsPerPage, this.filterByName, this.filterByGender);
  }

  private changePage(skip, take, filterByName, filterByGender) {
    this.userService.getUsers(skip, take, filterByName, filterByGender).then((result: any) => {
      this.users = result.users;
      this.totalItems = result.totalItems;
    });
  }

  public onFilterByNameChanged(event) {
    if (event == "") {
      this.changePage(-1, -1, null, this.filterByGender)
      this.currentPage = 1;
    } else {
      this.changePage(-1, -1, event, this.filterByGender);
    }
    this.filterByName = event;
  }

  public onFilterByGenderChanged(event) {
    if (event == "") {
      this.changePage(-1, -1, this.filterByName, null)
      this.currentPage = 1;
    } else {
      this.changePage(-1, -1, this.filterByName, event)
    }
    this.filterByGender = event;
  }

  onShowModal(id) {
    if (id) {
      this.userService.getUserById(id).then((result: any) => {
        let user = new User();
        user.name = result.name;
        user.phone = result.phone;
        user.email = result.email;
        user.birthDay = result.birthDay;
        user.birthMonth = result.birthMonth;
        user.birthYear = result.birthYear;
        user.address = result.address;
        user.gender = result.gender;
        user.description = result.description;
        this.userForm.isNewUser = false;
        this.userForm.initForm(user);
      });
    } else {
      this.userForm.isNewUser = true;
      this.userForm.initForm(new User());
    }
  }

  onSaveUser(user) {
    var result = this.userService.saveUser(JSON.stringify(user));
  }

}
