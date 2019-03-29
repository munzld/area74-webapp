import { Component } from '@angular/core';

import { HttpStatusService } from './http/http.status.service';
import { User } from './user/user';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentUser: User;

  running = false;

  constructor(private userService: UserService, private httpStatusService: HttpStatusService) {
    this.userService.currentUser.subscribe(user => this.currentUser = user, () => this.currentUser = undefined);
  }

}
