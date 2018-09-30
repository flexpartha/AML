import { Component, OnInit } from '@angular/core';
import { Icontact } from '../contact/icontact';
import { ContactServiceService } from '../contactservice/contact-service.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact:Icontact;
  public showSpinner:boolean=true;
  constructor(private _contactService:ContactServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    let contactId:number=this.route.snapshot.params['id'];
    this._contactService.getContactsById(contactId).subscribe((contactData)=>this.contact=contactData);
    this._contactService.getContactsById(contactId).subscribe(()=>this.showSpinner=false);
  }

  goToEditcontact(){
    let link=['/UPDATEPAGE',this.contact.id];
    this.router.navigate(link);
  }
  
  goToBack()
  {
    let link=['/Main'];
    this.router.navigate(link);
  }
}
