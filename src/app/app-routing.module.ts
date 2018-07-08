import { NgModule } from '@angular/core';

import {Router,RouterModule} from '@angular/router'
import { Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactsummeryListComponent } from './contactsummery-list/contactsummery-list.component';
import { HomeComponent } from './home/home.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { UpdateDetailComponent } from './update-detail/update-detail.component';

const routes:Routes=[
  {
    path:"Main",
    component:ContactsummeryListComponent
  },
  {
    path:"Home",
    component:HomeComponent
  },
  {
    path:"CONTACTLIST",
    component:ContactListComponent
  },
  {
    path:"CONTACTLIST/:id",
    component:ContactDetailsComponent
  },
  {
    path:"ADDCONTACT",
    component:AddcontactComponent
  },
  {
    path:"UPDATEPAGE/:id",
    component:UpdateDetailComponent
  },
  {
    path: '',
    redirectTo: '/Main',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    [RouterModule]
  ],
  declarations: []
})
export class AppRoutingModule { }
