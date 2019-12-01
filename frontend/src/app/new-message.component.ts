import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'new-message',
  template: `
    <mat-card>
      <mat-card-content>
        <form class="new-message-container">
          <mat-form-field>
            <input matInput [(ngModel)]="message.owner" placeholder="Name" name="name">
          </mat-form-field>
          <mat-form-field>
            <textarea matInput [(ngModel)]="message.text" placeholder="Message" name="msg"></textarea>
          </mat-form-field>
        </form>
        <mat-card-actions>
          <button (click)="post()" mat-raised-button color="primary">POST</button>
        </mat-card-actions>
      </mat-card-content>
    </mat-card>
  `
})
export class NewMessageComponent {
  constructor(private webService: WebService) {}
  message = {
    owner: "Guy",
    text: "Message is included"
  };
  post() {
    this.webService.postMessage(this.message)
  }
}
