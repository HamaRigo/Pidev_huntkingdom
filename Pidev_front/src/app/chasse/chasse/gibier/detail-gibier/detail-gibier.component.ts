import { Component, OnInit } from '@angular/core';
import {ServiceGibierService} from "../service/service-gibier.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-gibier',
  templateUrl: './detail-gibier.component.html',
  styleUrls: ['./detail-gibier.component.css']
})
export class DetailGibierComponent implements OnInit {
id:any
  gibier:any
  constructor(private serviceGibier:ServiceGibierService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.id=this.activatedRoute.snapshot.params['id']
    this.serviceGibier.getEspeceChasseById(this.id).subscribe((data)=>{
      this.gibier=data
    })
  }
update(id:any){
  this.router.navigate(['/chasse/gibier/updateGibier/'+id])
}
delete(id:any){
  this.serviceGibier.removeEspeceChasse(id).subscribe(()=>{
    this.router.navigate(['/chasse/gibier'])
  })
}
}
