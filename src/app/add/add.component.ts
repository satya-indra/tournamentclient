import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {


  constructor(private service:DataService,
              private router:Router) { }

  ngOnInit() 
  { }

  Addrecordfunction(addFormdata)
  {
    let addrecordObj = addFormdata.form.value;

    let observableresult = this.service.Insertrecord(addrecordObj);

    observableresult.subscribe((result:any)=>{
      console.log(result);
     // this.router.navigate(['/home']);
    this.router.navigate(['/view']);

    });

    
  }

  

}