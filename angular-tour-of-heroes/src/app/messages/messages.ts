import { Component } from '@angular/core';
import { MessageService } from '../message'; // <--- WAŻNE: Wyjście katalog wyżej do message.ts

@Component({
  selector: 'app-messages',
  templateUrl: './messages.html',
  styleUrls: ['./messages.css'],
  standalone: false
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}