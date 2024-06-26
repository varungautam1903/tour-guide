import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TripComponent } from './trip.component';
import { RouterModule, Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: TripComponent
  },
  {
    path: 'add-trip',
    component: AddTripComponent
  }
];

@NgModule({
  declarations: [
    TripComponent,
    AddTripComponent
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
export class TripModule { }
