import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { constant } from 'src/app/models/constants';
import { FireBaseService } from 'src/app/services/firebase.service';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.scss']
})
export class AddTripComponent {

  id: string = '';
  trip: { name: any, from: any, to: any, user: any } = { name: "", from: "", to: "", user: [] };

  constructor(private fireBaseSvc: FireBaseService,
    private router: Router,
    private route: ActivatedRoute,
    private tripSvc: TripService) {
    this.route.params
      .subscribe((x: any) => {
        this.id = x.id ?? "";
        if (x.id != null) {
          let tripDetail = this.tripSvc.trip;
          if (tripDetail != null) {
            this.trip.name = tripDetail.name;
            this.trip.from = tripDetail.from;
            this.trip.to = tripDetail.to;
          } else {
            this.goToTrip();
          }
        }
      });
  }

  goToTrip() {
    this.router.navigate(['/'])
  }

  createTrip() {
    this.fireBaseSvc.save(constant.TRIPS, this.trip).then(doc => {
      console.log("Added Successfully");
      this.reset();
      this.goToTrip();
    }).catch(err => {
      console.log(err);
      this.reset();
    })
  }

  updateTrip() {
    this.fireBaseSvc.update(constant.TRIPS, this.id, this.trip).then(doc => {
      console.log("Updated Successfully");
      this.reset();
      this.goToTrip();
    }).catch(err => {
      console.log(err);
      this.reset();
    })
  }

  reset() {
    this.trip = { name: "", from: "", to: "", user: []};
  }

}
