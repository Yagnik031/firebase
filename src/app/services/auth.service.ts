import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpService,
    private storage: StorageService
  ) { }

  LoginApi(data: any): Observable<any> {
    console.log(data);

    return this.http.post('auth/login', data);

  }

  loggedIn() {
    return this.storage.getItem('token');
  }

}
