import { Injectable } from '@angular/core';
import { HttpsService } from './https.service';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  constructor(private https: HttpsService) { }
}
