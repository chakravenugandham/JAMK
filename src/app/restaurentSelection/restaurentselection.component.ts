import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurentselection',
  templateUrl: './restaurentselection.component.html',
  styleUrls: ['./restaurentselection.component.scss']
})
export class RestaurentselectionComponent implements OnInit {
  toOrderList: any;
  constructor() { }
  getRestaurentList(d) {
    this.toOrderList = d
  }
  ngOnInit() {
  }

}
