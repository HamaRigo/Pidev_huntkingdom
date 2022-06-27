import { Component, OnInit } from '@angular/core';
import {ServiceLocalisationService} from "../service/service-localisation.service";

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.css']
})
export class LocalisationComponent implements OnInit {
localisation:any
  constructor(private serviceLocalisation:ServiceLocalisationService) { }

  ngOnInit(): void {
  this.serviceLocalisation.getLocalisation().subscribe((data)=>{
    this.localisation=data
  })
  }

}
