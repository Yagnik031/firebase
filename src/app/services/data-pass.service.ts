import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {

  private subject = new BehaviorSubject('');
  currentSubject = this.subject.asObservable();

  constructor() { }


  // if we want to change the subject value then....
  changeSubject(subject: any) {
    this.subject.next(subject);
  }
}
