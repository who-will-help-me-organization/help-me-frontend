import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onLogout (): void {
    this.authService.logOut();
    this.router.navigate(['/']);
  }
}
