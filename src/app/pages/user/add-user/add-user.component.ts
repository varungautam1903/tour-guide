import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { constant } from 'src/app/models/constants';
import { User } from 'src/app/models/user.model';
import { FireBaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  user: User = {
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    tel: '',
    address: '',
    email: '',
    travelNo: '',
    medicalNo: '',
    passportNo: '',
    passportExpiry: ''
  };

  constructor(private fireBaseSvc: FireBaseService, private router: Router) {
  }

  createUser() {
    console.log("test", this.user)
    this.fireBaseSvc.save(constant.USERS, this.user).then(doc => {
      console.log("Added Successfully");
      this.reset();
      this.router.navigate(['/user'])
    }).catch(err => {
      console.log(err);
      this.reset();
    })
  }

  goToUser() {
    this.router.navigate(['/user'])
  }

  reset() {
    this.user = {
      firstName: '',
      middleName: '',
      lastName: '',
      dob: '',
      tel: '',
      address: '',
      email: '',
      travelNo: '',
      medicalNo: '',
      passportNo: '',
      passportExpiry: ''
    };
  }

}
