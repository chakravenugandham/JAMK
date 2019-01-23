import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AppService } from '../../app.service';


@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.scss']
})
export class PlaceorderComponent implements OnInit {
  @Output() onRestaurentPicked: EventEmitter<any> = new EventEmitter<any>();
  Id: any;
  itemContains: boolean;
  items: any;
  selectedItem: any;
  count: any;
  disable: boolean = false;
  menuItems: any[];
  restaurentDataDetails: any;
  restaurentData: any[];
  constructor(private route: ActivatedRoute, public appService: AppService, ) {
    this.route.params.subscribe(params => {
      this.Id = params.id;
    });
  }
  addButtonClick(d) {
    this.count = 1;
    this.selectedItem = d;
    d.toggle = !d.toggle;
    this.onRestaurentPicked.next(d)
  }
  restaurentDetails() {
    this.appService.url = "online-restarauntdetails/" + this.Id;
    var token = this.appService.getToken();
    this.appService.getService(token).subscribe(res => {
      this.restaurentDataDetails = res;
      this.menuItems = this.restaurentDataDetails.restaurant_menus
      this.restaurentData = this.restaurentDataDetails.basic_info;
      this.menuItems.forEach(ele => {
        if (ele.items.length == 0) {
          ele.itemData = false;
        }else {
          ele.itemData = true;
        }
        this.items = ele.items;
        ele.toggle = true;
      })
    });
  }
  venu(d) {
    console.log(d)
    if (d == "add") {
      this.count++;
    } else if (d == "remove" && this.count > 0) {
      this.count--;
    }
    if (this.count == 0) {
      this.selectedItem.toggle = !this.selectedItem.toggle;
    }
  }
  ngOnInit() {
    this.restaurentDetails();
    this.restaurentData = [{
      banner: "",
      cod_accept: "",
      expected_deliver_time: "",
      online_status: "",
      onlinepayment_accept: "",
      order_min_price: "",
      restaraunt_name: ""
    }]
  }

}
