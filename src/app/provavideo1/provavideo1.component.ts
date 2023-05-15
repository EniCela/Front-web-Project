import { Component, OnInit } from '@angular/core';
import {  FormGroup ,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-provavideo1',
  templateUrl: './provavideo1.component.html',
  styleUrls: ['./provavideo1.component.css']
})
export class Provavideo1Component implements OnInit {
  constructor(
    private http:HttpClient,
    private router:Router,
  ){}
  selectedFile:any=File;

  form2:FormGroup =new FormGroup({
    video: new FormControl(''),
  })
  ngOnInit(): void {

  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadVideo1(file: File) {
    const formData = new FormData();
    formData.append('video', file);

    return this.http.post('http://127.0.0.1:8000/api/upload', formData);
  }

  uploadVideo2() {
    this.uploadVideo1(this.selectedFile)
      .subscribe(
        response => {
          console.log('Video uploaded successfully', response);
          // Handle response as needed
        },
        error => {
          console.error('Error uploading video', error);
          // Handle error as needed
        }
      );
  }

// eni(){
//   console.log(this.form2.value)

// }

}
