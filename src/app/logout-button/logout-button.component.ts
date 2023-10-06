import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/session/session.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent implements OnInit {



  constructor(
    private sessionService: SessionService,
    private router: Router

  ) { }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  logout() {
    this.sessionService.clearSession()
    this.router.navigateByUrl('/patients/register');

  }

}
