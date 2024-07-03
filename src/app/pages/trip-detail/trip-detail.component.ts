import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { constant } from 'src/app/models/constants';
import { FireBaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.scss']
})
export class TripDetailComponent {

  trip: any;
  tripId: any;
  tripList: any[] = [
    { id: 'qweq12', name: "Isle of weight", from: '06/05/2024', to: '07/05/2024' },
    { id: 'qwee23', name: "Japan", from: '02/05/2024', to: '10/05/2024' }
  ]
  tripDetails: any[] = [];

  userList: any[] = [];
  // userList: any[] = [
  //   {
  //     "id": "D3DDZXD",
  //     "firstName": "Chandra",
  //     "middleName": "",
  //     "lastName": "Joshi",
  //     "dob": "01 Jan 2024",
  //     "tel": "1234567890",
  //     "address": "Snowshill garden",
  //     "email": "chander@gmail.com",
  //     "travelNo": "TE332EE24",
  //     "medicalNo": "22WERTW443",
  //     "passporyExpiry": "03/25"
  //   },
  //   {
  //     "id": "D3DDZ3S",
  //     "firstName": "Pankaj",
  //     "middleName": "",
  //     "lastName": "Joshi",
  //     "dob": "01 Feb 2024",
  //     "tel": "9876543210",
  //     "address": "Birmingham",
  //     "email": "chander@gmail.com",
  //     "travelNo": "TE332EE24",
  //     "medicalNo": "22WERTW443",
  //     "passporyExpiry": "03/25"
  //   }
  // ]

  tripDetailList: any[] = [
    { tripId: "qweq12", userId: "D3DDZXD", paid: "Yes" },
    { tripId: "qweq12", userId: "D3DDZ3S", paid: "Yes" },
    { tripId: "qwee23", userId: "D3DDZ3S", paid: "Yes" }
  ]

  form = new FormGroup({
    userId: new FormControl('', Validators.required),
    paid: new FormControl('', Validators.required)
  });

  constructor(private route: ActivatedRoute, private fireBaseSvc: FireBaseService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.tripId = params['id'];
      // this.getTripDetails(this.tripId);
      this.getUserList();
      this.trip = this.tripList.find((x: any) => x.id == this.tripId) || 0;
    })
  }

  submit() {
    console.log(this.form.value.userId);
    let tripDetails = {
      userId: this.form.value.userId,
      tripId: this.tripId,
      paid: this.form.value.paid
    }

    this.addTripDetail(tripDetails);
  }

  addTripDetail(detail: any) {
    this.fireBaseSvc.save(constant.TRIPDETAILS, detail).then(res => {
      console.log("Added Successfully");
    }, err => {
      console.log("Trip Detail", err);
    })
  }

  getTrip(id: string) {
    this.fireBaseSvc.getOne(constant.TRIPS, id).subscribe((res: any) => {
      this.trip = res;
    }, (err: any) => {
      console.log("Trip", err);
    })
    // let tripUser = this.tripDetailList.filter(x => x.tripId == this.trip.id)
    // this.tripDetails = tripUser.map(x => ({ ...x, ...this.userList.find(y => y.id == x.userId) }))
  }

  getUserList() {
    this.fireBaseSvc.getAll(constant.USERS).subscribe(res => {
      if (res.length > 0) {
        this.userList = [];
        res.forEach((x) => {
          let item = {
            id: x.payload.doc.id,
            ...(x.payload.doc.data() as object)
          }
          this.userList.push(item);
        })
      }
    },
      err => {
        console.log("error", err);
      })
  }


}
