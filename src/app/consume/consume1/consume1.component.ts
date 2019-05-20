import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-consume1',
  templateUrl: './consume1.component.html',
  styleUrls: ['./consume1.component.css']
})
export class Consume1Component implements OnInit {

  constructor(private local: MyserviceService) { }

  ngOnInit() {
    
  }
  addmyservice()  {
    this.local.displayscore();
    this.local.addscore();
    this.local.displayscore();
  }
}
