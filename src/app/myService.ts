import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor(private http: HttpClient) { }

  // postData(data: any) {
  //   const url = 'http://127.0.0.1:5000/login'; // Replace with your Flask endpoint
  //   return this.http.post(url, data);
  // }

  submitData(data: object){
    this.http.post('http://127.0.0.1:5000/login', data).subscribe(response => {
      // console.log(response);
  });
}
}