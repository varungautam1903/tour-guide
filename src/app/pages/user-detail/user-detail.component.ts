import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  user: any
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

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const id = params['id'];
      this.getUser(id);
    })
  }

  getUser(id: any) {
    this.user = this.userList.find((x: any) => x.id == id) || 0;
  }
}
