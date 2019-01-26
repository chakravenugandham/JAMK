import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AppService } from '../app.service';


export interface State {
  flag: string;
  name: string;
  population: string;
}


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  restaurentsData: any = [];
  restaurentsDetails: any;
  onlinePayment: any;
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  filteredCities: Observable<State[]>;
  filteredSearch: Observable<State[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];


  constructor(public appService: AppService) {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();
    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
  restaurents() {
    this.appService.url = "online-restraraunts";
    var token = this.appService.getToken();
    this.appService.getService(token).subscribe(res => {
      this.restaurentsDetails = res;
      this.restaurentsData = this.restaurentsDetails.restaraunt_settings;
      this.restaurentsData.forEach(ele => {
        if (ele.onlinepayment_accept == 'yes') {
          this.onlinePayment = true;
        }
      })
    })

  }
  restaurentId(d) {
    console.log(d)
    this.appService.url = "online-restarauntdetails/" + d;
    var token = this.appService.getToken();
    this.appService.getService(token).subscribe(res => {
      console.log(res)
    });
  }
  ngOnInit() {
    this.restaurents();
    this.restaurentsDetails = {
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
         /* {
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
    }  */]
  }
}