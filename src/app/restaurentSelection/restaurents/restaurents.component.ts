import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurents',
  templateUrl: './restaurents.component.html',
  styleUrls: ['./restaurents.component.scss']
})
export class RestaurentsComponent implements OnInit {
  @Input() restaurentsData: any[];
  // restaurentsData: any = [];
  // restaurentsDetails: any;
  onlinePayment: any;
  constructor(public appService: AppService, public router: Router) {
    console.log(router.url)
  }
  restaurents() {
    Object.keys(this.restaurentsData).forEach(key => {
      if (this.restaurentsData[key].onlinepayment_accept == 'yes') {
        this.onlinePayment = true;
      }
    })
  }
  restaurentId(Id) {
    this.router.navigate(['/restaurentSelection', Id]);
    /*  this.appService.url = "online-restarauntdetails/" + Id;
     var token = this.appService.getToken();
     this.appService.getService(token).subscribe(res => {
       
       console.log(res)
     }); */
  }
  actions: boolean = true;
  ngOnInit() {
    console.log(this.restaurentsData)
    this.restaurents();
    if (this.router.url == "/homepage" || this.router.url == "/") {
      this.actions = true;
    } else {
      this.actions = false;
    }

    /* this.restaurentsDetails = {
      code: 200,
      description: "Getting Restaraunt Settings",
      message: "success"
      ,
      record_count: 1,
      restaraunt_settings: []
    };
    this.restaurentsData = [{
      banner: "http://broadenblue.com/projects/jamk/uploads/restaraunts/shah_5c2a2f2acd23c.jpg",
      cod_accept: "yes",
      expected_deliver_time: "30 mins",
      online_status: "online",
      onlinepayment_accept: "yes",
      order_min_price: "500",
      restaraunt_name: "Shah Ghouse Cafe & Restaurant",
      restaurantidref: "1"
    },
     */   /*  {
         banner: "http://broadenblue.com/projects/jamk/uploads/restaraunts/shah_5c2a2f2acd23c.jpg",
         cod_accept: "yes",
         expected_deliver_time: "30 mins",
         online_status: "online",
         onlinepayment_accept: "yes",
         order_min_price: "500",
         restaraunt_name: "Shah Ghouse Cafe & Restaurant",
         restaurantidref: "1"
       },
       {
         banner: "http://broadenblue.com/projects/jamk/uploads/restaraunts/shah_5c2a2f2acd23c.jpg",
         cod_accept: "yes",
         expected_deliver_time: "30 mins",
         online_status: "online",
         onlinepayment_accept: "yes",
         order_min_price: "500",
         restaraunt_name: "Shah Ghouse Cafe & Restaurant",
         restaurantidref: "1"
       },
       {
         banner: "http://broadenblue.com/projects/jamk/uploads/restaraunts/shah_5c2a2f2acd23c.jpg",
         cod_accept: "yes",
         expected_deliver_time: "30 mins",
         online_status: "online",
         onlinepayment_accept: "yes",
         order_min_price: "500",
         restaraunt_name: "Shah Ghouse Cafe & Restaurant",
         restaurantidref: "1"
       },
       {
         banner: "http://broadenblue.com/projects/jamk/uploads/restaraunts/shah_5c2a2f2acd23c.jpg",
         cod_accept: "yes",
         expected_deliver_time: "30 mins",
         online_status: "online",
         onlinepayment_accept: "yes",
         order_min_price: "500",
         restaraunt_name: "Shah Ghouse Cafe & Restaurant",
         restaurantidref: "1" 
   } *///]
  }

}
