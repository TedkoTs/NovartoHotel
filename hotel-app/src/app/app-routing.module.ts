
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRoomsComponent } from './rooms/all-rooms/all-rooms.component';
import { OwnerComponent } from './owner/owner/owner.component';
import { RoomFilterComponent } from './rooms/room-filter/room-filter.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rooms', component: AllRoomsComponent },
  { path: 'owner', component: OwnerComponent},
  { path: 'filter', component: RoomFilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
