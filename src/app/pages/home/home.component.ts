import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  constructor(public auth: AuthService) {}
  ngOnInit(): void {
    this.auth.user$.subscribe(response => {
      console.log('user observable', response);
      this.auth.getIdTokenClaims().subscribe(token => {
        console.log('token', token);
      });
    })
  }
}
