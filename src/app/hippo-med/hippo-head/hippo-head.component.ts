import { Component } from '@angular/core';

@Component({
  selector: 'app-hippo-head',
  templateUrl: './hippo-head.component.html',
  styleUrls: ['./hippo-head.component.css']
})
export class HippoHeadComponent {
  ngOnInit(): void {
    const splashScreen = document.getElementById('splashScreen');
    setTimeout(() => {
      splashScreen!.style.opacity = '0';
      setTimeout(() => {
        splashScreen!.style.display = 'none';
      }, 1000); // Wait for one second for the fade animation to complete
    }, 10000); // Change 10000 to the desired waiting time in milliseconds

    document.addEventListener('click', () => {
      splashScreen!.style.display = 'none';
    });
  }
}
