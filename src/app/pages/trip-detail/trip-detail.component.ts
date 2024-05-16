import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.scss']
})
export class TripDetailComponent {

  trip: any
  tripList: any[] = [
    { id: 'qweq12', name: "Isle of weight", from: '06/05/2024', to: '07/05/2024' },
    { id: 'qwee23', name: "Japan", from: '02/05/2024', to: '10/05/2024' }
  ]
  tripDetails: any[] = [];

  userList: any[] = [
    {
      "id": "D3DDZXD",
      "firstName": "Chandra",
      "middleName": "",
      "lastName": "Joshi",
      "dob": "01 Jan 2024",
      "tel": "1234567890",
      "address": "Snowshill garden",
      "email": "chander@gmail.com",
      "travelNo": "TE332EE24",
      "medicalNo": "22WERTW443",
      "passporyExpiry": "03/25"
    },
    {
      "id": "D3DDZ3S",
      "firstName": "Pankaj",
      "middleName": "",
      "lastName": "Joshi",
      "dob": "01 Feb 2024",
      "tel": "9876543210",
      "address": "Birmingham",
      "email": "chander@gmail.com",
      "travelNo": "TE332EE24",
      "medicalNo": "22WERTW443",
      "passporyExpiry": "03/25"
    }
  ]

  tripDetailList: any[] = [
    {tripId: "qweq12", userId: "D3DDZXD", paid: "Yes" },
    {tripId: "qweq12", userId: "D3DDZ3S", paid: "Yes" },
    {tripId: "qwee23", userId: "D3DDZ3S", paid: "Yes" }
  ]

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const id = params['id'];
      this.trip = this.tripList.find((x: any) => x.id == id) || 0;
      this.getTripDetails();
    })

  }

  getTripDetails() {
    let tripUser = this.tripDetailList.filter(x => x.tripId == this.trip.id)
    this.tripDetails = tripUser.map(x => ({...x, ...this.userList.find(y => y.id == x.userId)}))
  }
}
