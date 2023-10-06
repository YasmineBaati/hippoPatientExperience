import { Component, OnInit, AfterViewInit, OnDestroy  } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-hippo-testimonials',
  templateUrl: './hippo-testimonials.component.html',
  styleUrls: ['./hippo-testimonials.component.css']
})
export class HippoTestimonialsComponent implements OnInit {
  ngOnInit(): void {
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }

}
