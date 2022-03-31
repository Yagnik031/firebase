import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private storage: StorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const userToken = this.storage.getItem('token');
    ////  console.log(userToken);
    ////  console.log(localStorage);

    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${userToken}`),
    });

    ////  console.log(modifiedReq);

    return next.handle(modifiedReq);
  }
}
