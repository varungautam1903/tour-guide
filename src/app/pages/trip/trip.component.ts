import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { constant } from 'src/app/models/constants';
import { FireBaseService } from 'src/app/services/firebase.service';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent {

  tripList: any[] = []

  constructor(private fireBaseSvc: FireBaseService, private tripSvc: TripService, private router: Router) {
    this.getTripList();
  }

  getTripList() {
    this.fireBaseSvc.getAll(constant.TRIPS).subscribe(res => {
      if (res.length > 0) {
        this.tripList = [];
        res.forEach((x) => {
          let item = {
            id: x.payload.doc.id,
            ...(x.payload.doc.data() as object)
          }
          this.tripList.push(item);
        })
      }
    },
      err => {
        console.log("error", err);
      })
  }

  deleteTrip(id: any) {
    this.fireBaseSvc.delete(constant.TRIPS, id);
    this.tripList = this.tripList.filter(x => x.id != id);
  }

  tripUpdatePage(trip: any) {
    this.tripSvc.trip = trip;
    this.router.navigate(["/add-trip/", trip.id]);
  }

  tripDetailPage(trip: any) {
    this.tripSvc.trip = trip;
    this.router.navigate(["/trip-detail/", trip.id]);
  }

}
