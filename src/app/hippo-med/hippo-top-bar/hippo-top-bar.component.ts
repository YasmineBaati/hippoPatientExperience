import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hippo-top-bar',
  templateUrl: './hippo-top-bar.component.html',
  styleUrls: ['./hippo-top-bar.component.css']
})
export class HippoTopBarComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check if the user has scrolled down
    this.isScrolled = window.pageYOffset > 0;
  }
}
