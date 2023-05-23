import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  MoviesArray: any;
  isResultLoaded = false;
  constructor(
    private http:HttpClient,
    private router:Router,)
    {}

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
