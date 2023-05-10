import { Component, OnInit } from '@angular/core';
import {  FormGroup ,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  editArray: any;
  title: any;
  description: any;
  currentnewsID: any;

  constructor(
    private http:HttpClient,
    private router:Router

  ){}

  ngOnInit(): void {

  }

  form2:FormGroup =new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  })


  // async onsubmit(){
  //   console.log(this.form2.value)

  //   const title =this.form2.value.title;
  //   const description=this.form2.value.description;


  //   //  this.http.post('http://127.0.0.1:8000/api/register', form.value).subscribe((response :any)=>{
  //   //   localStorage.setItem('token-for-user', response.token);
  //   //  })
  //   }

  getAllNews()
  {
    this.http.get("http://127.0.0.1:8000/api/news")
    .subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.editArray = resultData;
    });
  }

    register()
  {

    let bodyData = {
      "title" : this.form2.value.title,
      "descripton" : this.form2.value.description,
    };

    this.http.post("http://127.0.0.1:8000/api/save",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully")
        // this.getAllEmployee();
        // this.title = '';
        // this.address = '';
        // this.mobile  = 0;
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
      "title" : this.form2.value.title,
      "descripton" : this.form2.value.description,
    };

    this.http.put("http://127.0.0.1:8000/api/update"+ "/"+ this.currentnewsID,bodyData).subscribe((resultData: any)=>

    {
        console.log(resultData);
        alert("Employee Registered Updateddd")
        this.router.navigate(['/news'])

        this.getAllNews();
         this.title = '';
        this.description = '';
        // this.mobile  = 0;
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


}
