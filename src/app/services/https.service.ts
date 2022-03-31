import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpsService {


  headers = new HttpHeaders({ 'Content-Type': 'application/json' })


  options = { headers: this.headers, withCredintials: true };

  constructor(private https: HttpClient) { }


  post(serviceName: string, data: any) {
    // console.log('Headers::::::::::::___________------->>>>', this.headers);
    // let header = new Headers({ 'Authorization': `Bearer ${this.auth.currentTokenValue}` });

    const url = environment.API + serviceName;
    return this.https.post(url, data, this.options);
  }

  get(serviceName: string) {
    const url = environment.API + serviceName;
    // console.log('Headers::::::::::::___________------->>>>', this.headers);
    return this.https.get(url, this.options);
  }

}
