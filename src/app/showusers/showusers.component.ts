import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css']
})
export class ShowusersComponent implements OnInit {

  UserArray : any[] = [];
  isResultLoaded = false;

  constructor(
    private http:HttpClient
  ){

  }
  ngOnInit(): void {
    this.getAllUser()
  }

  getAllUser()
  {
    this.http.get("http://127.0.0.1:8000/api/login")
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.UserArray = resultData;
    });
  }

  setDelete(data: any)
  {
    this.http.delete("http://127.0.0.1:8000/api/userdelete"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Deletedddd")
        this.getAllUser();

    });

  }
}

