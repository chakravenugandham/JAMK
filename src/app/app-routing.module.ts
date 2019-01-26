import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PlaceorderComponent } from './restaurentSelection/placeorder/placeorder.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RestaurentselectionComponent } from './restaurentselection/restaurentselection.component';


const routes: Routes = [
  { path: '', component: HomePageComponent}, 
  { path: 'register', component: RegistrationComponent },
 // { path: 'placeOrder/:id', component: PlaceorderComponent },
 { path: 'restaurentSelection/:id', component: RestaurentselectionComponent },
  { path: 'termsandconditions', component: TermsandconditionsComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'homepage', component: HomePageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
