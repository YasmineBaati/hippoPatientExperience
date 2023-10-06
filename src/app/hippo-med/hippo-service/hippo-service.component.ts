import { Component } from '@angular/core';
import { faBox, faDna, faHeartbeat, faHospitalUser, faNotesMedical, faPills, faWheelchair } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hippo-service',
  templateUrl: './hippo-service.component.html',
  styleUrls: ['./hippo-service.component.css']
})
export class HippoServiceComponent {
  faHeartbeat=faHeartbeat;
  faHospitalUser=faHospitalUser;
  faPills=faPills;
  faDna=faDna;
  faWheelchair=faWheelchair;
  faNotesMedical=faNotesMedical;
}
