import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudioService {
  headers = new HttpHeaders({
    "User-Id": "70729",
    "Device-Id": "5ec45124ad91a539",
    "Appapi-Id": "FZUx9ZBqMLpJ18lcnaEfcA7rTJOVpERbRiEuLqp1lj8=",
    "Session-Id": "nNKf590mLR0BnVxRrfNZuKbh4LVjVeVN5FGEgDHNfuY="
  });

  constructor(
    private http: HttpClient
    ) { }
  studioSearch(searchData) {
    let body= new FormData();
        body.append("searchData", searchData);
    return this.http.post("http://13.232.30.248:8081/schedule/check", body, {
      headers: this.headers
    });
  }
  createSschedule(createData){
    let body= new FormData();
        body.append("searchData", createData);
    return this.http.post("http://13.232.30.248:8080/schedule", body, {
      headers: this.headers
    });
  }
  updateSschedule(createData){
    let body= new FormData();
        body.append("searchData", createData);
    return this.http.put("http://13.232.30.248:8080/schedule", body, {
      headers: this.headers
    });
  }
}

