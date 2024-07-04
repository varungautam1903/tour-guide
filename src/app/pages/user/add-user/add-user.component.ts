import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { constant } from 'src/app/models/constants';
import { User } from 'src/app/models/user.model';
import { FireBaseService } from 'src/app/services/firebase.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  id: string = '';
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

  constructor(private fireBaseSvc: FireBaseService,
    private router: Router,
    private route: ActivatedRoute,
    private userSvc: UserService) {
    this.route.params
      .subscribe((x: any) => {
        this.id = x.id ?? "";
        if (x.id != null) {
          let userDetail = this.userSvc.user;
          if (userDetail != null) {
            this.user.firstName = userDetail.firstName;
            this.user.middleName = userDetail.middleName;
            this.user.lastName = userDetail.lastName;
            this.user.dob = userDetail.dob;
            this.user.tel = userDetail.tel;
            this.user.address = userDetail.address;
            this.user.email = userDetail.email;
            this.user.travelNo = userDetail.travelNo;
            this.user.medicalNo = userDetail.medicalNo;
            this.user.passportNo = userDetail.passportNo;
            this.user.passportExpiry = userDetail.passportExpiry;
          } else {
            this.goToUser();
          }
        }
      });
  }

  createUser() {
    this.fireBaseSvc.save(constant.USERS, this.user).then(doc => {
      console.log("Added Successfully");
      this.reset();
      this.router.navigate(['/user'])
    }).catch(err => {
      console.log(err);
      this.reset();
    })
  }

  updateUser() {
    this.fireBaseSvc.update(constant.USERS, this.id, this.user).then(doc => {
      console.log("Updated Successfully");
      this.reset();
      this.goToUser();
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
