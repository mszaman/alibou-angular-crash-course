import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyFirstService {
  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insertMessage({
      name: 'zaman',
      email: 'zaman@email.com',
      message: 'zaman message',
    });
    this.insertMessage({
      name: 'munshi',
      email: 'munshi@email.com',
      message: 'munshi message',
    });
    this.insertMessage({
      name: 'sayed',
      email: 'sayed@email.com',
      message: 'sayed message',
    });
    this.insertMessage({
      name: 'john',
      email: 'john@email.com',
      message: 'john message',
    });
  }

  insertMessage(message: {
    name: string;
    email: string;
    message: string;
  }): void {
    this.messages.push(message);
  }

  getAllMessages(): Array<any> {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
