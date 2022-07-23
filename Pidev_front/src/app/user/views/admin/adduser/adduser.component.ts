import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import { DataService } from '../../../Services/Data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  messageErr=""
  constructor(private ds:DataService,private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){}
  add(f:any){
    let data=f.value
    // console.log(data)
    this.ds.adduser(data).subscribe(response=>{
      // console.log(response)

      this.route.navigate(['/admin/userlist'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      // console.log(err.error)
      // console.log(err.status)
    })
  }
}
