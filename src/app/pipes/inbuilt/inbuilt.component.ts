import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuilt',
  templateUrl: './inbuilt.component.html',
  styleUrls: ['./inbuilt.component.css']
})
export class InbuiltComponent implements OnInit {
salary = 1231231
friend = "shen"
birthday = new Date();
scores = [89,8,4,34,43,89,0,3]
  constructor() { }

  ngOnInit() {
  }

}
