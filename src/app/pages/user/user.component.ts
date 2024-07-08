import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { constant } from 'src/app/models/constants';
import { FireBaseService } from 'src/app/services/firebase.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userList: any[] = []

  constructor(private fireBaseSvc: FireBaseService,
    private router: Router,
    private userSvc: UserService) {
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

  userDetailPage(user: any) {
    this.userSvc.user = user;
    this.router.navigate(["/user/add-user", user.id]);
  }

}
