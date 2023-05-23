import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-moviess',
  templateUrl: './moviess.component.html',
  styleUrls: ['./moviess.component.css']
})
export class MoviessComponent implements OnInit {

  MoviesArray : any[] = [];
  isResultLoaded = false;
  filterstring:any;
  titulli: any;
  regjizori: any;
  viti: any;
  cmimi: any;
  koha: any;
  video: any;
  foto: any;


constructor(
  private http:HttpClient,
  private router:Router,)
  {}

  ngOnInit(): void {
      console.log(this.MoviesArray)
      this.getAllMovies()
  }

  getAllMovies()
  {

    this.http.get("http://127.0.0.1:8000/api/movie")

    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        this.MoviesArray = resultData;
        console.log(this.MoviesArray)
    });
  }
  setUpdate(data: any)
  {
   this.titulli = data.titulli;
   this.regjizori = data.pershkrimi;
   this.viti = data.viti;
   this.cmimi = data.cmimi;
   this.koha = data.koha;
   this.video = data.video;
   this.foto = data.foto;

  }

  // UpdateRecords()
  // {
  //   let bodyData = {
  //     "titulli" : this.form3.value.titulli,
  //     "regjizori" : this.form3.value.regjizori,
  //     "viti" : this.form3.value.viti,
  //     "cmimi" : this.form3.value.cmimi,
  //     "koha" : this.form3.value.koha,
  //     "pershkrimi" : this.form3.value.pershkrimi,
  //     "video" : this.form3.value.video,
  //     "foto":this.form3.value.foto
  //   };

  //   this.http.put("http://127.0.0.1:8000/api/update"+ "/"+ this.currentnewsID,bodyData).subscribe((resultData: any)=>
  //   {
  //       console.log(resultData);
  //       alert("Employee Registered Updateddd")
  //       this.getAllNews();
  //       this.title = '';
  //       this.description = '';
  //   });
  // }

  setDelete(data: any)
  {
    this.http.delete("http://127.0.0.1:8000/api/movies-delete"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Movies Deletedddd")
        this.getAllMovies();

    });

  }
}
