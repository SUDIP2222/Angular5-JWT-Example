import { Injectable } from '@angular/core';
import {LoginService} from "./login.service";
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Location } from '../model/location'

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class LocationService {


  constructor(private http: Http,
              private loginService: LoginService) {
  }


  getLocations(): Observable<Location[]> {

    let headers = new Headers({'Authorization': 'Bearer ' + this.loginService.token});
    let options = new RequestOptions({headers: headers});

    return this.http.get('http://localhost:8000/api/getlocation', options)
      .map((response: Response) => response.json());

  }


}
