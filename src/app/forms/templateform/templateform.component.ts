import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  getFormData = function(something){
    console.log(something);
  }
  constructor() { }

  ngOnInit() {
  }

}
