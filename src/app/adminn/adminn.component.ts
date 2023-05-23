import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-adminn',
  templateUrl: './adminn.component.html',
  styleUrls: ['./adminn.component.css']
})
export class AdminnComponent {

  filterstring:any;
  private isAuthenticated = false;


  constructor(
    private http:HttpClient,
    private router:Router,)
    {}
  logout(){
    localStorage.removeItem('token-for-user');
    // Ndryshoni statusin e autentifikimit
    this.isAuthenticated = false;
    this.router.navigate(['/'])

    }
}
