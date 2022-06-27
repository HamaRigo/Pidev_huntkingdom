import { Component, OnInit } from '@angular/core';
import {ServiceLocalisationService} from "../service/service-localisation.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-localisation',
  templateUrl: './detail-localisation.component.html',
  styleUrls: ['./detail-localisation.component.css']
})
export class DetailLocalisationComponent implements OnInit {
id:any
  localisation:any
  constructor(private serviceLocalisation:ServiceLocalisationService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.id=this.activatedRoute.snapshot.params['id']
    this.serviceLocalisation.getLocalisationById(this.id).subscribe((data)=>{
      this.localisation=data
    })
  }
update(id:any){
  this.router.navigate(['/chasse/localisation/updateLocalisation/'+id])
}
delete(id:any){
  this.serviceLocalisation.removeLocalisation(id).subscribe(()=>{
    this.router.navigate(['/chasse/localisation'])
  })
}
}
