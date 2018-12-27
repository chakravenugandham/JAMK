import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
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
