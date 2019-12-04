import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-nav',
  template: `
    <mat-toolbar color="primary">
      <a mat-button routerLink="/">Message Board</a>
      <a mat-button routerLink="/messages">Messages</a>
      <a mat-button routerLink="/register">Register</a>
      <a mat-button routerLink="/register">Welcome {{auth.name}}</a>
    </mat-toolbar>
  `
})
export class NavComponent {
  constructor(private auth: AuthService) {}
}
