import { Component, OnInit } from '@angular/core';
import {  FormGroup ,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
  databyid:any;

  constructor(
    private http:HttpClient,
    private router:Router,
    private activate: ActivatedRoute,
  ){}

  ngOnInit(): void {

    this.getallNews(this.activate.snapshot.paramMap.get('id'))


  }

  //marja e te dhenave nga form2
  form2=new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  })

  //marim te dhenat nga item me id e klikuar
async getallNews(id:any){
  this.databyid= await this.http.get("http://127.0.0.1:8000/api/news"+"/"+ id).toPromise();
  console.log(this.databyid);
  this.form2=new FormGroup({
    title: new FormControl(this.databyid['title']),
    description: new FormControl(this.databyid['descripton']),
  })

}

//  async getAllNews()
//   {
//    this.http.get("http://127.0.0.1:8000/api/news")
//      .subscribe((resultData: any) => {
//        this.editArray = resultData;
//        let id = this.activate.snapshot.paramMap.get('id');
//        console.log(id);
//        console.log(this.editArray);
//        this.editArray.forEach((obj: any) => {
//        this.object = this.editArray.find((items: any) => items.id === id);
//        console.log(this.object)

//        });
//       //  console.log(object)
//      });
//   }

// regjisterojm te dhenat

  register()
  {

    let bodyData = {
      "title" : this.form2.value.title,
      "descripton" : this.form2.value.description,
    };

    this.http.post("http://127.0.0.1:8000/api/save",bodyData).subscribe((resultData: any)=>
    {

        alert("Employee Registered Successfully")

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

    this.http.put("http://127.0.0.1:8000/api/update"+ "/"+ this.activate.snapshot.paramMap.get('id'),bodyData).subscribe((resultData: any)=>

    {
        console.log(bodyData);
        alert("Employee Registered Updateddd")
        this.router.navigate(['/news'])

        this.getallNews(this.activate.snapshot.paramMap.get('id'));
         this.title = '';
        this.description = '';

    });

  }

  save(){
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
