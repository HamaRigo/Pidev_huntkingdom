import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceLocalisationService {

  constructor(private http:HttpClient) { }

  getLocalisation(){
    return this.http.get( 'http://localhost:3000/localisationChasse')
  }
  postLocalisation(localisation:any){
    return this.http.post('http://localhost:3000/localisationChasse/',localisation)
  }
  getLocalisationById(id:any){
    return this.http.get('http://localhost:3000/localisationChasse/'+id)
  }
  removeLocalisation(id:any){
    return this.http.delete('http://localhost:3000/localisationChasse/'+id)
  }
  updateLocalisation(id:any,localisation:any){
    return this.http.patch('http://localhost:3000/localisationChasse/'+id,localisation)
  }
}
