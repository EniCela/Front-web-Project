import { Component, OnInit } from '@angular/core';
import {  FormGroup ,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent  implements OnInit{

  constructor(
    private http:HttpClient,
    private router:Router,
  ){}

  form3:FormGroup =new FormGroup({
    titulli: new FormControl(''),
    regjizori: new FormControl(''),
    viti: new FormControl(''),
    cmimi: new FormControl(''),
    koha: new FormControl(''),
    pershkrimi: new FormControl(''),
    video: new FormControl(''),
  })

  // eni(){
  //   console.log(this.form3.value)
  //  }

  ngOnInit(): void {

  }

  selectedFile:any=File;

  onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}
  register()
  {

    let bodyData = {
      "titulli" : this.form3.value.titulli,
      "regjizori" : this.form3.value.regjizori,
      "viti" : this.form3.value.viti,
      "cmimi" : this.form3.value.cmimi,
      "koha" : this.form3.value.koha,
      "pershkrimi" : this.form3.value.pershkrimi,
      "video" : this.form3.value.video.File,

    };

    this.http.post("http://127.0.0.1:8000/api/insert_video",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Movie Registered Successfully")
        this.router.navigate(['/news'])

        // this.getAllEmployee();
        // this.title = '';
        // this.address = '';
        // this.mobile  = 0;
    });
  }



}
