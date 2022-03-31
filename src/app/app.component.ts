import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Sets initial value to true to show loading spinner on first load
  loading = true;

  constructor(router: Router) {
    router.events.subscribe((event: any) => {
      this.navigationInterceptor(event);
    });
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => { // here
        this.loading = false;
      }, 1000);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      setTimeout(() => { // here
        this.loading = false;
      }, 1000);
    }
    if (event instanceof NavigationError) {
      setTimeout(() => { // here
        this.loading = false;
      }, 1000);
    }
  }
}
