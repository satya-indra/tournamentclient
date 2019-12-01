import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  
  Selectall()
  {
   return this.http.get("http://localhost:3434/list");
  }

  Selectbyno(id)
  {
    return this.http.get("http://localhost:3434/list/" + id);
  }

  Deleterecord(Venue)
  {
    console.log(Venue);
    return this.http.delete("http://localhost:3434/list/" + Venue);
  }

  Insertrecord(venueObj)
  {
    return this.http.post("http://localhost:3434/list", venueObj);
  }
}
