import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-homepageuser',
  templateUrl: './homepageuser.component.html',
  styleUrls: ['./homepageuser.component.css']
})
export class HomepageuserComponent implements OnInit {
  loggin:boolean=false;
  MoviesArray : any[] = [];
  isResultLoaded = false;
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

    // logout(){
    //   this.loggin ===false
    //   console.log(!this.loggin);
    // }
    ngOnInit(): void {
      console.log(this.MoviesArray)
      this.getAllMovies()
  }

    getAllMovies()
    {

      this.http.get("http://127.0.0.1:8000/api/movie")

      .subscribe((resultData: any)=>
      {
          this.isResultLoaded = true;
          this.MoviesArray = resultData;
          console.log(this.MoviesArray)
      });
    }

}
