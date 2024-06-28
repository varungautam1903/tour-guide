import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { constant } from 'src/app/models/constants';
import { FireBaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.scss']
})
export class AddTripComponent {

  trip: { name: any, from: any, to: any } = { name: "", from: "", to: "" };

  constructor(private fireBaseSvc: FireBaseService, private _router: Router) {
  }

  createTrip() {
    this.fireBaseSvc.save(constant.TRIPS, this.trip).then(doc => {
      console.log("Added Successfully");
      this.reset();
      this._router.navigate(['/'])
    }).catch(err => {
      console.log(err);
      this.reset();
    })
  }

  reset() {
    this.trip = { name: "", from: "", to: "" };
  }

}
