import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { Icontact } from '../contact/icontact';
import { ContactServiceService } from '../contactservice/contact-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
  contactTitle:string="ADD CONTACT HERE VIA FORM";

  contactObj:object={};
  constructor(private contactService:ContactServiceService,private router:Router) { }

  ngOnInit() {
    
  }
  addNewContact=function(contact){
    this.contactObj={
      "name":contact.name,
      "email":contact.email,
      "company":contact.company,
      "role":contact.role,
      "twitter":contact.twitter,
      "location":contact.location,
      "info":contact.info,
      "image":contact.image
    }
    this.contactService.createContact(this.contactObj).subscribe((res:Response)=>{
      //this.contactService.getAllContacts();
      let link=['/CONTACTLIST'];
      this.router.navigate(link);
    })
    
    //this.contactService.getAllContacts();
  }
  goToBack()
  {
    let link=['/Main'];
    this.router.navigate(link);
  }
}
