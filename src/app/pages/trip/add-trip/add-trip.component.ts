import { Component } from '@angular/core';
import { FireBaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.scss']
})
export class AddTripComponent {

  trip: { name: any, from: any, to: any } = { name: "", from: "", to: "" };

  constructor(private fireBaseSvc: FireBaseService) {
  }

  createTrip() {
    console.log(this.trip);
    this.trip = { name: "", from: "", to: "" };
  }

}
