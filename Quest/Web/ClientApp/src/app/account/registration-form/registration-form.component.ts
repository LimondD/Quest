import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../UserModel';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  user = new UserModel();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  registration() {
    return this.userService.create(this.user)
      .subscribe(result => {
        this.router.navigate(['/login']);
      },
      error => console.log(error)
      );
      //.finally(() => this.isRequesting = false)
      //.subscribe(
      //  result => {
      //    if (result) {
      //    }
      //  });
        //error => this.errors = error);
  };
}
