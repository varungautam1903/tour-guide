import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helper/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/trip/trip.module').then(
      mod => mod.TripModule
    )
  },
  {
    path: 'trip-detail/:id',
    loadChildren: () => import('./pages/trip-detail/trip-detail.module').then(
      mod => mod.TripDetailModule
    )
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(
      mod => mod.LoginModule
    )
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(
      mod => mod.UserModule
    ),
    canActivate: [AuthGuard]
  },
  {
    path: 'user-detail/:id',
    loadChildren: () => import('./pages/user-detail/user-detail.module').then(
      mod => mod.UserDetailModule
    ),
    canActivate: [AuthGuard]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
