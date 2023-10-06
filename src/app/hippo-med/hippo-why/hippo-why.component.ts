import { Component } from '@angular/core';
import { faCube, faBullseye,faImages } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hippo-why',
  templateUrl: './hippo-why.component.html',
  styleUrls: ['./hippo-why.component.css']
})
export class HippoWhyComponent {
  faBullseye = faBullseye;
  faCube  = faCube ;
  faImages =faImages;

}
