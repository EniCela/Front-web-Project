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
        this.NewsArray = resultData;
        console.log(this.NewsArray)
    });
  }
  setUpdate(data: any)
  {
   this.title = data.title;
   this.description = data.description;
   this.currentnewsID = data.id;
  }


  UpdateRecords()
  {
    let bodyData = {
      "title" : this.title,
      "descripton" : this.description,
    };

    this.http.put("http://127.0.0.1:8000/api/update"+ "/"+ this.currentnewsID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Updateddd")
        this.getAllNews();
        this.title = '';
        this.description = '';
    });
  }
  register()
  {

    let bodyData = {
      "title" : this.title,
      "descripton" : this.description,
    };

    this.http.post("http://127.0.0.1:8000/api/save",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully")
        this.getAllNews();
        this.title = '';
        this.description = '';
    });
  }
   save()
  {
    if(this.currentnewsID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }

  }

  setDelete(data: any)
  {
    this.http.delete("http://127.0.0.1:8000/api/delete"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Deletedddd")
        this.getAllNews();

    });

  }
}

