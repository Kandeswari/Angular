import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
locaPI = 3.14
scores = [1,5,.67,78]
displayscore = function(){
  console.log("From My service")
  console.log(this.scores)
}
addscore(){
  this.scores.push(10)
}
  constructor() { }
}
