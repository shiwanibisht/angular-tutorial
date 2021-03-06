import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages : String[] = [];

  addMessage(message: String): void {
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }
}
