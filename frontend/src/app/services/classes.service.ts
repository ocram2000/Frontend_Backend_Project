import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {Allclasses} from '../models/classes'

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  URL_API = 'http://localhost:3000/api/classes';


  selectedclass : Allclasses | any = {
    name : '',
    course : '',
    year : "",
    note : ""
  }
  allclasses: Allclasses[] | any;

  constructor(private http: HttpClient){

  }

  getClasses(){

    return this.http.get<Allclasses[]>(this.URL_API);

  }

  createClasses(classes : Allclasses){
    return this.http.post(this.URL_API, classes);
  }

  updateClasses(classes : Allclasses){
    return this.http.put(`${this.URL_API}/${classes._id}`, classes);
  }

  deleteClasses(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}
