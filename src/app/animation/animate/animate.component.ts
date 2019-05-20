import { Component, OnInit } from '@angular/core';
import {trigger,state,style, transition,animate} from "@angular/animations";
@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations:[
    trigger('animateText',
    [state('start',style({color:'red',transform:'scale(1),',
    letterSpacing:'10px'
  
  }

    )),
    state('end',style({color:'blue',transform:'scale(1),',
    letterSpacing:'15px'})),
    transition('start <-> end',animate('200ms ease-out'))])
  ]
})
export class AnimateComponent implements OnInit {
  currentstate = 'start'
animateNow(){
this.currentstate = this.currentstate === 'start'? 'end':'start'
}
  constructor() { }

  ngOnInit() {
  }

}
