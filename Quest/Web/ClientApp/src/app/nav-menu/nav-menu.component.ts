import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = true;
  isLoggin = false;
  userName;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isLoggin = this.userService.isLoggedIn();
    this.userName = localStorage.getItem('userName');
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
