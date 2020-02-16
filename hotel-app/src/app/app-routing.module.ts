
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRoomsComponent } from './rooms/all-rooms/all-rooms/all-rooms.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rooms', component: AllRoomsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
