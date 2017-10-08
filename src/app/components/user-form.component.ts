import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../components/user.model'

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['user-form.component.css']
})

export class UserFormComponent implements OnInit {
  public userModel: User;
  public birthDate: any;
  public isNewUser: boolean = true;
  public userForm: FormGroup;
  @Output() public onSaveUser = new EventEmitter<User>();

  constructor(
    private elementRef: ElementRef,
    private formBuilder: FormBuilder) {
    this.userModel = new User();
  }

  public ngOnInit() {
    this.initUserForm();
  }

  public initForm(user: User) {
    this.userModel = user;
    if (user.birthDay && user.birthMonth && user.birthYear) {
      this.birthDate = user.birthDay + '-' + user.birthMonth + '-' + user.birthYear;
    } else {
      this.birthDate = "";
    }
  }

  public saveUser() {
    if (this.birthDate != "") {
      let fullBirthDay = this.birthDate.split("-");
      this.userModel.birthDay = parseInt(fullBirthDay[0]);
      this.userModel.birthMonth = parseInt(fullBirthDay[1]);
      this.userModel.birthYear = parseInt(fullBirthDay[2]);
    }
    this.onSaveUser.emit(this.userModel);
  }

  private initUserForm = () => {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', [Validators.required, Validators.minLength(10)]],
      birthDate: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

}