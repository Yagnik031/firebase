import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataPassService } from 'src/app/services/data-pass.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  databyId: any;

  constructor(
    private router: Router,
    private location: Location,
    private datapass: DataPassService
  ) {
  }

  ngOnInit() {
    this.datapass.currentSubject.subscribe((data: any) => {
      console.log(data);
      if (!data) {
        this.router.navigate(['/']);
      }
      this.databyId = data;
    })
  }


  backButton() {
    this.location.back();
  }
}
