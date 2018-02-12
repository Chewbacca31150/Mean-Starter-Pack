import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { IUser } from '../../models/interfaces/user.interface';

@Injectable()
export class UserService {

  private _user: IUser;


  constructor(private _http: Http) {
  }

  getUsers(): Observable<Response> {
    return this._http.get('/api/users');
  }

}
