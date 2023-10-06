import { Component } from '@angular/core';
import { faAward, faBox, faFlask, faHospital, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { CountUpOptions } from 'countup.js';

@Component({
  selector: 'app-hippo-count',
  templateUrl: './hippo-count.component.html',
  styleUrls: ['./hippo-count.component.css']
})
export class HippoCountComponent {
  faUserDoctor = faUserDoctor;
  faHospital=faHospital;
  faFlask=faFlask;
  faAwards=faAward;

  pickANumber = 500;
  Equipe = 85;
  Departements = 18;
  Labs = 12;
  Awards = 150;
  opts: CountUpOptions = {
    enableScrollSpy: true,
  };
  doThisOnComplete() {
    console.log('complete!');
  }
  // applyEndVal() {
  //   this.endVal = Number(this.pickANumber);
  // }
  useOptions() {
    this.opts = {
      decimalPlaces: 2,
      separator: ':',
      duration: 5,
    };
  }

  resetOptions() {
    this.opts = {
      enableScrollSpy: true,
    };
  }
}
