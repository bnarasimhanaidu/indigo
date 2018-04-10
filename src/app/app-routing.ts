import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsComponent } from './pages/forms/forms.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'About', component: AboutUsComponent },
  { path: 'form', component:  FormsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}