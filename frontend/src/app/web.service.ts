import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:3000/api';
  messages = [];
  constructor(private http: HttpClient, private sb: MatSnackBar) {
    this.getMessages();
  }
  async getMessages(user='') {
    try {
      user = (user) ? '/' + user : '';
      this.messages = await this.http.get(this.BASE_URL + '/messages' + user)
        .toPromise() as any[];
    } catch (err) {
      this.handleError(err);
    }
  }
  async postMessage(message) {
    try {
      const response = await this.http.post(this.BASE_URL + '/messages', message)
        .toPromise() as any[];
      this.messages.push(response);
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

