import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router){}
  loggin:boolean=false;

  ngOnInit(): void {
    // this.login();
    // this.logout();
  //  this.logout();
    //   if(localStorage.getItem("token-for-user") == null){
    //     this.loggin === true
    //   }
    // }

  // logout(){
  //   if (localStorage.getItem("token-for-user") == null){
  //   this.loggin == true
  //   }
  // }

}

  login(){
  this.loggin === true
  console.log(this.loggin)
  }

  logout(){
    this.loggin ===false
    console.log(!this.loggin);
  }
}
