import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-login',
  imports: [MatToolbarModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
 isLoggedIn: boolean = false; // A real application would use an authentication service

  constructor() {}

  login() {
    console.log('User logged in');
    // Logic to handle login (e.g., call a service, redirect to login page)
    this.isLoggedIn = true;
  }

  logout() {
    console.log('User logged out');
    // Logic to handle logout (e.g., clear session data)
    this.isLoggedIn = false;
  }
}
