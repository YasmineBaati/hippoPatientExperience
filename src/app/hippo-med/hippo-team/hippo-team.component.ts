import { Component } from '@angular/core';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-hippo-team',
  templateUrl: './hippo-team.component.html',
  styleUrls: ['./hippo-team.component.css']
})
export class HippoTeamComponent {
  faTwitter=faTwitter;
  faFacebook=faFacebook;
  faInstagram=faInstagram;
  faLinkedin=faLinkedin;

}
