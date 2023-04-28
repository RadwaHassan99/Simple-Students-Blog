import { Component } from '@angular/core';
import { Router, ActivatedRoute,NavigationEnd  } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  isScrolled = false;
  isHomePage = false;
  
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = (this.router.url === '/');
      }
    });

    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  private scroll = (): void => {
    if (!this.isHomePage) {
      return;
    }

    const navbar = document.querySelector('.navbar');
    const isTop = window.scrollY > 0;

    if (isTop !== this.isScrolled) {
      this.isScrolled = isTop;
    }
  };
}

