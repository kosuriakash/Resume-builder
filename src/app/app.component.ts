import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  Akash: any = null;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
     this.http.get('https://gist.githubusercontent.com/kosuriakash/8358a6079caff7db832b7992b5797abf/raw/b5c481ecb03f03ea9af2b26c0526832bd13bcf4b/Akash')
     .subscribe(res =>{
      this.Akash = res;
      console.log(res);
     });
    }
  }