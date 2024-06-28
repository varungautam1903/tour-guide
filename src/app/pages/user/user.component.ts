import { Component } from '@angular/core';
import { constant } from 'src/app/models/constants';
import { FireBaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userList: any[] = []

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

  constructor(private fireBaseSvc: FireBaseService) {
    this.getUserList();
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

  deleteUser(id: any) {
    this.userList = this.userList.filter(x => x.id != id);
    localStorage.setItem("userList", JSON.stringify(this.userList));
  }
}
