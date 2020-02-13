import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationsComponent } from './accomodations/accomodations.component';


const routes: Routes = [
  { path: 'accomodation', component: AccomodationsComponent },
  { path: '', component: HomeComponent },
  { path: 'pricing', component: PricingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
