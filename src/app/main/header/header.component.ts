import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private storage: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.storage.removeItem('token');
    this.router.navigate(['/auth']);
  }
}
