import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TripDetailComponent } from './trip-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
      path: '',
      component: TripDetailComponent
  }
];

@NgModule({
  declarations: [
    TripDetailComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    DatePipe
  ]
})
export class TripDetailModule { }
