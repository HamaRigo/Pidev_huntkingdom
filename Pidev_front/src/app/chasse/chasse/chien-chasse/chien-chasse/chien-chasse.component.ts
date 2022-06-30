import { Component, OnInit } from '@angular/core';
import {ServiceChienChasseService} from "../services/service-chien-chasse.service";

@Component({
  selector: 'app-chien-chasse',
  templateUrl: './chien-chasse.component.html',
  styleUrls: ['./chien-chasse.component.css']
})
export class ChienChasseComponent implements OnInit {
  chienChasses:any

  constructor( private serviceChienChasse:ServiceChienChasseService) { }

  ngOnInit(): void {
    this.serviceChienChasse.getChienChasse().subscribe((data)=>{
      this.chienChasses= data
    })
  }

}
