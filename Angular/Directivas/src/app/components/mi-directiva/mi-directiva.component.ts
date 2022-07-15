import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-directiva',
  templateUrl: './mi-directiva.component.html',
  styleUrls: ['./mi-directiva.component.css']
})
export class MiDirectivaComponent implements OnInit {

  url:string = "https://pbs.twimg.com/media/Bd3qALwCYAEHT81?format=png&name=small";  constructor() { }
 url2:string="https:direcionErronea.jpg"
  ngOnInit(): void {
  }

}
