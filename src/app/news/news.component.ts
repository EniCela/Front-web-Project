import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  NewsArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
  title: string ="";
  description: string ="";
  currentnewsID: any;


  constructor(
    private http:HttpClient
  ){
    this.getAllNews();
  }
  ngOnInit(): void {

  this.getAllNews();

  }

  getAllNews()
  {

    this.http.get("http://127.0.0.1:8000/api/news")

    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.NewsArray = resultData;
    });
  }
  setUpdate(data: any)
  {
   this.title = data.title;
   this.description = data.description;
   this.currentnewsID = data.id;
  }

  // UpdateRecords()
  // {
  //   let bodyData = {
  //     "title" : this..title,
  //     "descripton" : this.form2.value.description,
  //   };

  //   this.http.put("http://127.0.0.1:8000/api/update"+ "/"+ this.currentEmployeeID,bodyData).subscribe((resultData: any)=>
  //   {
  //       console.log(resultData);
  //       alert("Employee Registered Updateddd")
  //       this.getAllEmployee();
  //       this.name = '';
  //       this.address = '';
  //       this.mobile  = 0;
  //   });
  // }

}

