import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggin:boolean=false;

  ngOnInit(): void {
   this.logout();
//  if (localStorage.getItem("token-for-user") == null){
//   this.loggin == true
//     }
  }

  logout(){
    if (localStorage.getItem("token-for-user") == null){
    this.loggin == true
    }
  }

}
