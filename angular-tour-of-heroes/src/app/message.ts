import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  // CZY MASZ TĘ FUNKCJĘ? 👇
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}