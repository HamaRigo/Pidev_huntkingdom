import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {
  token:any=localStorage.getItem('token')
  headerAdmin=new HttpHeaders()
    .set('authorization',this.token)
    .set('role','Admin')

  params=new HttpParams()
    .set('secret',environment.secret)
    .set('client',environment.client)


  headerall=new HttpHeaders()
    .set('authorization',this.token)
  constructor(private http :HttpClient) { }

  getAllusers(){
    return this.http.get(`${environment.urlBackend}`+'users/',{headers:this.headerall,params:this.params})
  }

  adduser(profile:any){

    return this.http.post(environment.urlBackend+'addstudent/',profile,{headers:this.headerAdmin,params:this.params})

  }

  deleteuser(id:any){
    return this.http.delete(environment.urlBackend+'user/'+id,{headers:this.headerAdmin,params:this.params})

  }


  updateuser(id:string,newprofile:any){

    return this.http.patch(environment.urlBackend+'user/'+id,newprofile,{headers:this.headerAdmin,params:this.params})

  }


  getOneuser(id:any){

    return this.http.get(environment.urlBackend+'user/'+id,{headers:this.headerall,params:this.params})
  }



}
