import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

import { HttpStatusService } from './http/http.status.service';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user;

  running = false;

  constructor(private userService: UserService, private httpStatusService: HttpStatusService) {}

  ngOnInit() {
    this.httpStatusService.running.subscribe(running => {
      // setTimeout hack to make Angular happy
      setTimeout(() => {
        this.running = running;
      }, 100);
    });

    this.userService.currentUser.subscribe(user => this.user = user, () => this.user = undefined);

    // initial load
    this.updateUser();

    // keep alive
    interval(20 * 60 * 1000).subscribe(() => {
      this.updateUser();
    });
  }

  private updateUser(): void {
    this.userService.retrieveUser();
  }
}
