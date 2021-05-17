import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'ContactUs',component:ContactUsComponent},
  {path:'updateCustomer/:id/:fname/:lname/:doj',component:UpdateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
RoutingComponent = [HomeComponent,ContactUsComponent];
