import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(
              private activeroute:ActivatedRoute,
              private router:Router,
              private dataservice:DataService
  ) { }

  ngOnInit() 
  {
    this.activeroute.paramMap.subscribe((deleterequest)=>{
      let Venue = deleterequest.get("Venue");
      console.log("+++++++++++++++++++++++++++++++");
      console.log(Venue);
     let observableresult = this.dataservice.Deleterecord(Venue);
     observableresult.subscribe((result)=>{
       console.log(result);
     });
    });
    this.router.navigate(["/view"]);
  }
}