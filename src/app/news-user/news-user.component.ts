import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news-user',
  templateUrl: './news-user.component.html',
  styleUrls: ['./news-user.component.css']
})
export class NewsUserComponent {


  NewsArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
  title: string ="";
  description: string ="";
  currentnewsID: any;
  filterstring:any;


  constructor(
    private http:HttpClient,
    private router:Router,
  ){}

  ngOnInit(): void {

  this.getAllNews();

  }

  getAllNews()
  {

    this.http.get("http://127.0.0.1:8000/api/news")

    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        this.NewsArray = resultData;
        console.log(this.NewsArray)
    });
  }
}
