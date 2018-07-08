import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactServiceService } from './contactservice/contact-service.service';
import { AppRoutingModule } from './/app-routing.module';
import { HttpModule } from '@angular/http';
import { ContactsummeryListComponent } from './contactsummery-list/contactsummery-list.component';
import { HomeComponent } from './home/home.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { UpdateDetailComponent } from './update-detail/update-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactsummeryListComponent,
    HomeComponent,
    AddcontactComponent,
    UpdateDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ContactServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
