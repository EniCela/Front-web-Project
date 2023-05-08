import { Component } from '@angular/core';
import {  FormGroup ,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent {
  constructor(
    private http:HttpClient,

  ){
  }
  form2:FormGroup =new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  })

  async onsubmit(){
    console.log(this.form2.value)

    const title =this.form2.value.title;
    const description=this.form2.value.description;


    //  this.http.post('http://127.0.0.1:8000/api/register', form.value).subscribe((response :any)=>{
    //   localStorage.setItem('token-for-user', response.token);
    //  })
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
}
