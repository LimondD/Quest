import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from '../UserModel';

import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = new UserModel();
  constructor(private userService: UserService, private router: Router) {
    userService.getUser().subscribe(result => {
      this.user = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

  save() {
    return this.userService.save(this.user)
      .subscribe(result => {
        this.router.navigate(['/login']);
      },
        error => console.log(error)
      );
  };
}
