import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'messages',
  template: `
    <div *ngFor="let message of webService.messages">
      <mat-card>
        <mat-card-header>
          <mat-card-title [routerLink]="['/messages', message.owner]" class="link">{{message.owner}}</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          by: {{message.text}}
        </mat-card-content>
      </mat-card>
    </div>
  `
})
export class MessagesComponent {
  constructor(private webService: WebService, private route: ActivatedRoute) {}
  ngOnInit() {
    console.log(this.route.snapshot.params.name);
  }
}
