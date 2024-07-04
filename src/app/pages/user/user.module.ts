import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'add-user/:id',
    component: AddUserComponent
  }
];

@NgModule({
  declarations: [
    UserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    DatePipe
  ]
})
export class UserModule { }
