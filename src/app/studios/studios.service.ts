import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudioService {
  headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(
    private http: HttpClient
    ) { }
  studioSearch(searchData) {
    // let body= new FormData();
    //     body.append("searchData", searchData);
    return this.http.post("http://13.232.30.248:8081/schedule/check", searchData, {
      headers: this.headers
    });
  }
  createSschedule(createData){
    // console.log(createData);
    // let body= new FormData();
        // body.append("searchData", createData);
    return this.http.post("http://13.232.30.248:8080/schedule", createData, {
      headers: this.headers
    });
  }
  updateSschedule(createData){
    return this.http.put("http://13.232.30.248:8080/schedule", createData, {
      headers: this.headers
    });
  }
}

