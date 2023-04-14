import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as CryptoJs from 'crypto-js'

@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor(private http: HttpClient) { }

  // postData(data: any) {
  //   const url = 'http://127.0.0.1:5000/login'; // Replace with your Flask endpoint
  //   return this.http.post(url, data);
  // }

  submitLoginData(data: object){
    this.http.post('http://127.0.0.1:5000/login', data).subscribe(response => {
// <<<<<<< HEAD
      // console.log(response);
// =======
      //console.log(response);
// >>>>>>> bdf99be54ab18afbc08b177517db9d74834c77f8
  });
}

  submitRegisterData(data: object){
    this.http.post('http://127.0.0.1:5000/signup', data).subscribe(response => {
      //console.log(response);
  });
}
}
