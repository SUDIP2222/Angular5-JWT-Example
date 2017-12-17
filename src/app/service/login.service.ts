import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'


@Injectable()
export class LoginService {

  public token: string;

  constructor(private http: Http) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }


  login(email: string, password: string): Observable<boolean> {

    return this.http.post('http://localhost:8000/api/auth', JSON.stringify({email: email, password: password}))
      .map((response: Response) => {
        let token = response.json() && response.json().data.token;
        if (token) {
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({email: email, token: token}));
          return true;
        } else {
          return false;
        }
      });

  }


  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }


}
