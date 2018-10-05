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
    alert(JSON.stringify(this.user));
  };
}
