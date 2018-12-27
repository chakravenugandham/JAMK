import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  id = 'qDuKsiwS5xw';
  id1 = 'CXbj2fE2mMI';
  id2 = 'F6AeC8V25As';
  private player;
  private ytEvent;

  constructor() {

  }
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
}
