import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ipost } from './shared/models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CustomDirective';

  postsArr : Array<Ipost> = []
  POST_URL = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private _httpClient : HttpClient){}

  ngOnInit(): void {
    this._httpClient.get<Ipost[]>(this.POST_URL)
      .subscribe(res=>{
        // console.log(res);
        this.postsArr = res
        
      })
  }
onEdit(post : Ipost){
  console.log(post.id);
  
}
}
