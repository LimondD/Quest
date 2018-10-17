import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  isExpanded = true;
  isLoggin = false;
  userName;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.subscription = this.activatedRoute.queryParams.subscribe(
      () => {
        this.userName = localStorage.getItem('userName');
        this.isLoggin = this.userService.isLoggedIn();
      });
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }
}
