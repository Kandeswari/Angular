import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RemoteserviceService {

  constructor(private http:HttpClient) { }
  getRemoteData(){
   return  this.http.get("http://localhost:3000/all")
  }
  addFriend (friend){
    return this.http.post("http://localhost:3000/all",friend)
  }
  deleteFriend(id){
    return this.http.delete("http://localhost:3000/all/" +id)
  }
  getRemoteDatabyid(id){
    return  this.http.get("http://localhost:3000/all/"+id)
   }
   updateFriend (friend){
    return this.http.put("http://localhost:3000/all",friend)
  }
}
