import { Component, OnInit } from '@angular/core';
import {ServiceGibierService} from "../service/service-gibier.service";

@Component({
  selector: 'app-gibier',
  templateUrl: './gibier.component.html',
  styleUrls: ['./gibier.component.css']
})
export class GibierComponent implements OnInit {
gibier:any
  constructor(private serviceGibier:ServiceGibierService) { }

  ngOnInit(): void {
  this.serviceGibier.getEspeceChasse().subscribe((data)=>{
    this.gibier=data
  })
  }

}
