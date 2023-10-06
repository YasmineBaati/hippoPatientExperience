import { Component } from '@angular/core';
import { faAtom, faFingerprint, faGift } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hippo-about',
  templateUrl: './hippo-about.component.html',
  styleUrls: ['./hippo-about.component.css']
})
export class HippoAboutComponent {
  faFingerprint = faFingerprint;
  faGift = faGift;
  faAtom=faAtom;
}
