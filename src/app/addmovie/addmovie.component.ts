import { Component, OnInit } from '@angular/core';
import {  FormGroup ,FormControl  } from '@angular/forms';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { VideoMaster } from '../video-master';

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

  myFiles: string[] = [];
  myfoto: string[] = [];

  selectedFile:File|null=null;

  myVideos:any = Observable<VideoMaster[]>;

  form3:FormGroup =new FormGroup({
    titulli: new FormControl(''),
    regjizori: new FormControl(''),
    viti: new FormControl(''),
    cmimi: new FormControl(''),
    koha: new FormControl(''),
    pershkrimi: new FormControl(''),
    video: new FormControl(''),
    foto: new FormControl(''),
  })

  getvideoDetails(event:any) {

    this.selectedFile=event.target.files[0]

  }

  getfotodetails(event:any)
  {
    this.selectedFile=event.target.files[0]
  }

  // eni(){
  //   let bodyData = {
  //     "titulli" : this.form3.value.titulli,
  //     "regjizori" : this.form3.value.regjizori,
  //     "viti" : this.form3.value.viti,
  //     "cmimi" : this.form3.value.cmimi,
  //     "koha" : this.form3.value.koha,
  //     "pershkrimi" : this.form3.value.pershkrimi,
  //     "video" : this.myFiles,
  //     "foto" : this.form3.value.foto

  //   };
  //   console.log(bodyData);
  //  }

  ngOnInit(): void {

  }


  register()
  {
    // if (!this.selectedFile){
    //   return;
    // }
    // const formData = new FormData();
    // formData.append('foto', this.selectedFile)
    // formData.append('titiulli', this.form3.value.titiulli)
    // formData.append('regjizori', this.form3.value.regjizori)
    // formData.append('viti', this.form3.value.viti)
    // formData.append('cmimi', this.form3.value.cmimi)
    // formData.append('koha', this.form3.value.koha)
    // formData.append('pershkrimi', this.form3.value.pershkrimi)
    let bodyData = {
      "titulli" : this.form3.value.titulli,
      "regjizori" : this.form3.value.regjizori,
      "viti" : this.form3.value.viti,
      "cmimi" : this.form3.value.cmimi,
      "koha" : this.form3.value.koha,
      "pershkrimi" : this.form3.value.pershkrimi,
      "video" : this.form3.value.video,
      "foto":this.form3.value.foto
    };
    console.log(bodyData)


    this.http.post("http://127.0.0.1:8000/api/insert_video",bodyData ).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Movie Registered Successfully")
        this.router.navigate(['/admindashboard'])
    });
  }
}
