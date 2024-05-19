import { Component } from '@angular/core';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent {

  tripList: any[] = [
    { id: 'qweq12', img: "/assets/img/trip1.png", name: "Isle of weight", from: '06/05/2024', to: '07/05/2024' },
    { id: 'qwee23', img: "/assets/img/trip2.png", name: "Japan", from: '02/05/2024', to: '10/05/2024' }
  ]

  constructor() {
  }

  deleteTrip(id: any) {
    this.tripList = this.tripList.filter(x => x.id != id);
  }
}
