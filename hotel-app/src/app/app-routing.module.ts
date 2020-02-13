import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationsComponent } from './accomodations/accomodations.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'accomodation', component: AccomodationsComponent },
  { path: 'pricing', component: PricingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
