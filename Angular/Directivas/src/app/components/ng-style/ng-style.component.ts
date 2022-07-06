import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  color:string = "salmon";
  size:number = 10;
  constructor() { }

  ngOnInit(): void {
  }

  changeSize($event:any){
    this.size = $event.target.value
  }

}
