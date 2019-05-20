import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RemoteserviceService } from 'src/app/services/remoteservice.service';

@Component({
  selector: 'app-updatefriend',
  templateUrl: './updatefriend.component.html',
  styleUrls: ['./updatefriend.component.css']
})
export class UpdatefriendComponent implements OnInit {
updateid: number;
users :any 
name : any;
location : any;
years : any;
  constructor(private router: ActivatedRoute,private remote: RemoteserviceService) { }

  ngOnInit() {
    console.log(this.router.snapshot.params.myid);
    this.updateid = this.router.snapshot.params.myid;
    //consolw.log(this.router.snapshot.paramMap)
    this.getRemoteDatabyid(this.updateid);
  }
  getRemoteDatabyid(id){
    this.remote.getRemoteDatabyid(id).subscribe(
      (data)=>{
      this.users = data
      console.log("Success")
      console.log(this.users)
      this.name = this.users.name;
      this.location = this.users.location;
      this.years = this.users.years;
    },
    (error)=>{
      console.log("Error")
      console.log(error)
    })
  }
  updateFriend(formvalue){
    var friends = {};
    friends={
      "id":this.updateid,
      "name" : formvalue.name,
            "location" : formvalue.location,
            "years" : formvalue.years
    }
    this.remote.addFriend(friends).subscribe(
      (data)=>{
        console.log("success");
        
      }
    )
  }
}
