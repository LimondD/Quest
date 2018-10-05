import { Component, OnInit } from '@angular/core';
import { UserModel } from '../UserModel';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  user = new UserModel();
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  registration() {
    return this.userService.create(this.user)
      .subscribe(result => result);
      //.finally(() => this.isRequesting = false)
      //.subscribe(
      //  result => {
      //    if (result) {
      //    }
      //  });
        //error => this.errors = error);
  };
}
