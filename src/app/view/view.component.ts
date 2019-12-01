import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  lists:any;
  constructor(private router:Router,
              private dataservice:DataService) { }

  ngOnInit() 
  {
    let observableresult = this.dataservice.Selectall();
    observableresult.subscribe((result)=>{
      console.log(result);
      this.lists=result;
    });
  }

}
