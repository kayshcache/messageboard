import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:3000/api';
  private messageStore = [];
  private messageSubject = new Subject();
  messages = this.messageSubject.asObservable();

  constructor(private http: HttpClient, private sb: MatSnackBar) {
    this.getMessages();
  }
  
  getMessages(user='') {
    user = (user) ? '/' + user : '';
    this.http.get(this.BASE_URL + '/messages' + user).subscribe(response => {
      this.messageStore = response as any[];	
      this.messageSubject.next(this.messageStore);
    }, err => {
      this.handleError(err)
    });
  }

  async postMessage(message) {
    try {
      const response = await this.http.post(this.BASE_URL + '/messages', message)
        .toPromise();
      this.messageStore.push(response as any[]);
      this.messageSubject.next(this.messageStore);
    } catch (err) {
      this.handleError(err)
    }
  }

  private handleError(err) {
    console.log(Object.keys(err));
    console.log(err.message);
    this.sb.open('Oops: ' + err.statusText, 'close', {duration: 6000});
  }
}

