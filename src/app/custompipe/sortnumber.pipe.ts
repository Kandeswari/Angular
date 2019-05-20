import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortnumber'
})
export class SortnumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value)
    console.log(args)
   
    return value.sort(this.sortNumbers);
    //return value.sort(function(a,b){return a-b})*/
    
  }
  sortNumbers = (a,b)=>a-b
    
  
}
