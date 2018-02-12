import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users = [];
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUsers()
      .subscribe(users => {
        if (users && users.json() && users.json().data)
          this.users = users.json().data;
      });
  }

}
