import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceGibierService {

  constructor(private http:HttpClient) { }

  getEspeceChasse(){
    return this.http.get( 'http://localhost:3000/especeChasse')
  }
  postEspeceChasse(especeChasse:any){
    return this.http.post('http://localhost:3000/especeChasse/',especeChasse)
  }
  getEspeceChasseById(id:any){
    return this.http.get('http://localhost:3000/especeChasse/'+id)
  }
  removeEspeceChasse(id:any){
    return this.http.delete('http://localhost:3000/especeChasse/'+id)
  }
  updateEspeceChasse(id:any,especeChasse:any){
    return this.http.patch('http://localhost:3000/especeChasse/'+id,especeChasse)
  }
}
