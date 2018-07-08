import { Component, OnInit } from '@angular/core';
import { Icontact } from '../contact/icontact';
import { ContactServiceService } from '../contactservice/contact-service.service';
import { error } from 'util';
import { Router } from '@angular/router';
import {Http} from '@angular/http'
import 'rxjs/add/operator/toPromise';
import { Response } from '@angular/http';
import { Headers } from '@angular/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  employeeContact:Icontact[];
  statusMessage:string;
  private headers=new Headers({'Content-Type':'application/json'});
  contactsUrl = "http://localhost:3000/contacts";
  constructor(private http:Http, private contactService:ContactServiceService,private router:Router) { }

  ngOnInit() {
    this.contactService.getAllContacts()
    .subscribe((contactData)=>this.employeeContact=contactData,
    (error)=>{
      this.statusMessage="Problems with service,please try after sometime";
    })
  }
  goToAddProduct()
  {
    let link=['/ADDCONTACT'];
    this.router.navigate(link);
  }

  goToBack()
  {
    let link=['/Main'];
    this.router.navigate(link);
  }
  deleteContact=function(id){
    if(confirm("Are You Sure?")){
      return this.http.delete(this.contactsUrl+"/"+id,{headers:this.headers})
      .toPromise()
      .then(()=>{
        this.contactService.getAllContacts()
        .subscribe((contactData)=>this.employeeContact=contactData);
      })
    }
  }
}
