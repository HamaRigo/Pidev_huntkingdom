import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../../Services/Data.service";

@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.component.html',
  styleUrls: ['./detailuser.component.css']
})
export class DetailuserComponent implements OnInit {
  id:any
  datauser:any
  constructor(private aroute:ActivatedRoute,private ds:DataService) {
    this.aroute.params.subscribe(data=>this.id= data['id'])
  }
  // constructor() { }

  ngOnInit(): void {
    this.ds.getOneuser(this.id).subscribe(data=>{
      console.log(data.id)
      this.datauser=data
    })

  }

}
