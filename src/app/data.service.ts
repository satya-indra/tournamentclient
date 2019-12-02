import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  
  Selectall()
  {
   return this.http.get("http://172.18.4.141:9099/list/");
  }

  Selectbyno(id)
  {
    return this.http.get("http://172.18.4.141:9099/list/" + id);
  }

  Deleterecord(Venue)
  {
    console.log(Venue);
    return this.http.delete("http://172.18.4.141:9099/list/" + Venue);
  }

  Insertrecord(venueObj)
  {
    return this.http.post("http://172.18.4.141:9099/list/", venueObj);
  }
}
