import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any; // Declare the jQuery variable

@Component({
  selector: 'app-revie',
  templateUrl: './revie.component.html',
  styleUrls: ['./revie.component.css']
})
export class RevieComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initCarousel(); // Call the carousel initialization function after the view has been initialized
  }

  private initCarousel() {
    $(document).ready(() => {
      $('.carousel').carousel({
        padding: 200
      });
      autoplay.bind(this)();
    });

    // Define autoplay function using an arrow function
    const autoplay = () => {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 3000);
    };

    // Call autoplay function within the component instance
    autoplay.bind(this)();
  }
}
