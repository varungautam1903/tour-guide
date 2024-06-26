import { Component } from '@angular/core';
import { FireBaseService } from 'src/app/services/firebase.service';

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

  constructor(private fireBaseSvc: FireBaseService) {
    this.getData();
  }

  deleteTrip(id: any) {
    this.tripList = this.tripList.filter(x => x.id != id);
  }

  getData() {
    this.fireBaseSvc.getAll('use').subscribe(res => {
      debugger;
    }, 
    err => {
     console.log("error", err);
     debugger;
    })
  }

  add() {
    let data = {
      name: "Test",
      phone: "9876543210"
    }
    this.fireBaseSvc.save("uses", data).then(doc => {
      console.log("registration successful");
      debugger;
      console.log(doc);
    }).catch(err => console.log(err))
  }
}
