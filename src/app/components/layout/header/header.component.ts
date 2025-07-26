import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ]
})
export class HeaderComponent implements OnInit {

  currentPath: string = '';

  constructor(
    public router: Router,
    private locationService: Location
  ) {}

  ngOnInit(): void {
    this.currentPath = this.router.url;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = event.urlAfterRedirects;
      }
    });
  }

  /**
   * Collapse the navbar on link click (mobile only)
   */
  closeNavbar(navbar: HTMLElement): void {
    if (window.innerWidth < 768 && navbar?.classList.contains('show')) {
      new bootstrap.Collapse(navbar).hide();
    }
  }
}
