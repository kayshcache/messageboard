import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:3000/api';
  messages = [];
  constructor(private http: HttpClient) {
    this.getMessages();
  }
  async getMessages() {
    this.messages = await this.http.get(this.BASE_URL + '/messages').toPromise() as any[];
  }
  async postMessage(message) {
    const response = await this.http.post(this.BASE_URL + '/messages', message).toPromise() as any[];
    this.messages.push(response);
  }
}

