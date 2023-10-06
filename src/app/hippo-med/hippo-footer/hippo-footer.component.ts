import { Component } from '@angular/core';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-hippo-footer',
  templateUrl: './hippo-footer.component.html',
  styleUrls: ['./hippo-footer.component.css']
})
export class HippoFooterComponent {
  faTwitter=faTwitter;
  faFacebook=faFacebook;
  faInstagram=faInstagram;
  faLinkedin=faLinkedin;
}
