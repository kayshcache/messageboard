import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'messages',
  template: `
    <div *ngFor="let message of webService.messages">
      <mat-card>
        <mat-card-header>
          <mat-card-title>{{message.owner}}</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          by: {{message.text}}
        </mat-card-content>
      </mat-card>
    </div>
  `
})
export class MessagesComponent {
  constructor(private webService: WebService) {}
/*
  async ngOnInit() {
    this.messages = (await this.webService.getMessages()) as any[];
  }
  messages = [];
 */
}
