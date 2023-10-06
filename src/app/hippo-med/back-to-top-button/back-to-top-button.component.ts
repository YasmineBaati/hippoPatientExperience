import { Component, HostListener, OnInit } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back-to-top-button',
  templateUrl: './back-to-top-button.component.html',
  styleUrls: ['./back-to-top-button.component.css']
})
export class BackToTopButtonComponent implements OnInit {

  showButton = false;

  constructor() { }
  faAngleUp = faAngleUp;
  ngOnInit(): void {
    // Perform initial check
    this.toggleBackToTop();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.toggleBackToTop();
  }

  private toggleBackToTop() {
    if (window.scrollY > 100) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
