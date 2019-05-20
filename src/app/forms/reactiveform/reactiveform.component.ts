import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms";
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
 reactiveform:any
  constructor() { }

  ngOnInit() {
    this.reactiveform = new FormGroup({
      fname:new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[a-zA-Z]+$')

      ])),
      lname:new FormControl("",this.customvalidator),
      hobby:new FormControl()
    })
  }
  customvalidator = function(control){
    console.log(control)
    if(control.value.length <4){
      return {lname:true};
    }

  }

  getFormData = function(something){
    alert("6");
    console.log(something)
  }
}
