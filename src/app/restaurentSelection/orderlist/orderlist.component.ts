import { Component, OnInit, SimpleChanges, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent implements OnInit, OnChanges {
  @Input() toOrderList: any;
  constructor() {
  }
  toOrderListItems: any[];
  ngOnChanges(changes: SimpleChanges) {
    if (changes['toOrderList']) {
      if (this.toOrderList != null) {
        this.toOrderListItems.push(this.toOrderList);
        console.log(this.toOrderListItems)
        if (this.toOrderListItems.length != 0) {
          this.button = true;
        } else {
          this.button = false;
        }
      }
    }
  }
  selectedItem: any;
  count: any = 1;
  button: boolean = false;
  price:any;
  venu(d) {
    console.log(d)
    if (d == "add") {
      this.count++;
    } else if (d == "remove" && this.count > 0) {
      this.count--;
    }
    if (this.count == 0) {
      this.toOrderList.toggle = !this.toOrderList.toggle;
    }if (this.count != 0) {
      this.button = true;
    } else {
      this.button = false;
    }
    this.price=this.count * this.toOrderList.selling_price
  }
  ngOnInit() {
    this.toOrderListItems = []
  }

}
