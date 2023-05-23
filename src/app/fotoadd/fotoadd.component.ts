import { Component } from '@angular/core';
import {  FormGroup ,FormControl } from '@angular/forms';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { VideoMaster } from '../video-master';

@Component({
  selector: 'app-fotoadd',
  templateUrl: './fotoadd.component.html',
  styleUrls: ['./fotoadd.component.css']
})
export class FotoaddComponent {

    selectedFile: File | null = null;

    constructor(private http: HttpClient) {}

    handleFileChange(event: any): void {
      this.selectedFile = event.target.files[0];
    }

    async register(): Promise<void> {
      if (!this.selectedFile) {
        return;
      }

      const formData = new FormData();
      formData.append('photo', this.selectedFile);

      // const headers = new HttpHeaders();
      // headers.append('Content-Type', 'multipart/form-data');

      try {
        await this.http.post('http://127.0.0.1:8000/api/insert', formData).subscribe();
        console.log('Fotoja u ngarkua me sukses!');
      } catch (error) {
        console.error('Gabim gjatë ngarkimit të fotos:', error);
      }
    }

  // constructor(
  //   private http:HttpClient,
  //   private router:Router,
  // ){}

  // // form3:FormGroup =new FormGroup({
  // //   foto: new FormControl(''),
  // // })

  // selectedFile:File|null=null;

  // getfotodetails(event:any)
  // {
  //   this.selectedFile=event.target.files[0]
  // }

  // async register():Promise<void>
  // {
  //   if (!this.selectedFile){
  //     return;
  //   }
  //   const formData = new FormData();
  //   formData.append('foto', this.selectedFile)
  //   const headers = new HttpHeaders();
  //   headers.append('Content-Type', 'multipart/form-data')

  //   try{
  //     await this.http.post("http://127.0.0.1:8000/api/insert",formData ,{headers} ).toPromise();
  //     console.log(formData);
  //   }
  //   catch(error){
  //     console.log("Error");

  //   }
  // }
}
