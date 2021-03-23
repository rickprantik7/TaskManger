import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;
  

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'https://devza.com/tests/tasks';
    let headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
   headers = headers.set('AuthToken', 'BYK2Volx0AaJNUQHvqjbWGl9puN5YnnQ');
   
  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/listusers`,{headers:{
      'AuthToken': 'BYK2Volx0AaJNUQHvqjbWGl9puN5YnnQ'
    }});
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/create`, payload,{headers:{
      'AuthToken': 'BYK2Volx0AaJNUQHvqjbWGl9puN5YnnQ'
    }});
  }

  patch(uri: string, payload: Object) {
    return this.http.patch(`${this.ROOT_URL}/update`, payload),{headers:{
      'AuthToken': 'BYK2Volx0AaJNUQHvqjbWGl9puN5YnnQ'
    }};
  }

  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/delete`,{headers:{
      'AuthToken': 'BYK2Volx0AaJNUQHvqjbWGl9puN5YnnQ'
    }});
  }

  login(email: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/users/login`, {
      email,
      password
    }, {
        observe: 'response'
      });
  }

  signup(email: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/users`, {
      email,
      password
    }, {
        observe: 'response'
      });
  }


}
