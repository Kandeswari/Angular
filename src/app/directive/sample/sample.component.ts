import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  score =[11,12,13]
  locations = [
    {
    "city" : "chennai",
    "code" : "044"
    },
    {
      "city" : "Banglore",
      "code" : "044"
      },
      {
        "city" : "Mumbai",
        "code" : "022"
        }
]

display:boolean = false
friend = "prafful"
toggle = function(){
this.display = this.display?false:true
  console.log("help")
}


  constructor() { }

  ngOnInit() {
  }

}
