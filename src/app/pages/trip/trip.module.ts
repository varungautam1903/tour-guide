import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TripComponent } from './trip.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      component: TripComponent
  }
];

@NgModule({
  declarations: [
    TripComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    DatePipe
  ]
})
export class TripModule { }
