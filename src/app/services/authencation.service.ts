import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthencationService {

  constructor( private http:HttpClient) { }

  register(name:string, email:string ,password:string){ 
   const data={ 
      email:email,
      password:password,
      name:name,
    }
    return this.http.post('http://localhost:8000/api/register-user', data);
  }
}
