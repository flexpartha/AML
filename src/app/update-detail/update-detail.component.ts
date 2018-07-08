import { Component, OnInit } from '@angular/core';
import { Icontact } from '../contact/icontact';
import { ContactServiceService } from '../contactservice/contact-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import {Http} from '@angular/http'
import 'rxjs/add/operator/toPromise';
import { Response } from '@angular/http';
import { Headers } from '@angular/http';

@Component({
  selector: 'app-update-detail',
  templateUrl: './update-detail.component.html',
  styleUrls: ['./update-detail.component.css']
})
export class UpdateDetailComponent implements OnInit {

  id:number;
  contact=[];
  data:object={};
  contactObj:object={};
  private headers=new Headers({'Content-Type':'application/json'});
  contactsUrl = "http://localhost:3000/contacts";
  constructor(private http:Http,private _contactService:ContactServiceService,private route:ActivatedRoute,private router:Router) { }

  updateContact=function(contact){
    this.contactObj={
      "name":contact.name,
      "email":contact.email,
      "company":contact.company,
      "role":contact.role,
      "twitter":contact.twitter,
      "location":contact.location,
      "info":contact.info,
      "image":contact.image
    };
    // this._contactService.updateContact(this.contactObj).subscribe((res:Response)=>{
    //   this._contactService.getAllContacts();
    // })

    //const url="http://localhost:3000/contacts";
    this.http.put(this.contactsUrl+"/"+this.id,JSON.stringify(this.contactObj),{headers:this.headers})
    .toPromise()
    .then(()=>{
      let link=['/CONTACTLIST'];
      this.router.navigate(link);
    })
    
  }
  ngOnInit() {
    //let contactId:number=this.route.snapshot.params['id'];
    //this._contactService.getContactsById(contactId).subscribe((contactData)=>this.contact=contactData);
      this.route.params.subscribe(params=>{
      this.id=+params['id'];
    });
    
    this.http.get("http://localhost:3000/contacts").subscribe(
      (res:Response)=>{
        this.contact=res.json();
        for(var i=0;i<this.contact.length;i++){
          if(parseInt(this.contact[i].id)===this.id){
            this.data=this.contact[i];
            break;
          }
        }
      }
    )
  }

  goToBack()
  {
    let link=['/Main'];
    this.router.navigate(link);
  }
}
