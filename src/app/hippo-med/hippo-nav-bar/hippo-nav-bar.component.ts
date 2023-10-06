import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hippo-nav-bar',
  templateUrl: './hippo-nav-bar.component.html',
  styleUrls: ['./hippo-nav-bar.component.css']
})
export class HippoNavBarComponent {
  faCoffee = faCoffee;
  isScrolled = false;
  constructor(private router: Router) {} // Inject the Router


  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check if the user has scrolled down
    this.isScrolled = window.pageYOffset > 0;
  }
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
