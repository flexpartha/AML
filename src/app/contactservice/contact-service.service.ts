import { Injectable } from '@angular/core';
import { Icontact } from '../contact/icontact';
import {Http} from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Response } from '@angular/http';

const contact:Icontact[]=[];
@Injectable()
export class ContactServiceService {
  contactsUrl = "http://localhost:3000/contacts";
  constructor(private _http:Http) { }

  getAllContacts():Observable<Icontact[]>{
    return this._http.get(this.contactsUrl)
    .map((response:Response)=><Icontact[]>response.json())
    .catch(this.handleError);   
  }

  handleError(error:Response)
  {
    console.error(error);
    return Observable.throw(error);
  }

  getContactsById(id:number):Observable<Icontact>{
    return this._http.get(this.contactsUrl +"/"+ id)
    .map((response:Response)=><Icontact>response.json())
    .catch(this.handleError);
  }

  createContact(contact:Icontact):Observable<number>{
    return this._http.post(this.contactsUrl,contact)
    .map(success => success.status)
    .catch(this.handleError);
  }
  // updateContact(contact:Icontact):Observable<number>{
  //   return this._http.put(this.contactsUrl+"/"+contact.id,contact)
  //   .map(success => success.status)
  //   .catch(this.handleError);
  // }
}
