import { Component, OnInit } from '@angular/core';
import { RemoteserviceService } from 'src/app/services/remoteservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css']
})
export class RestapiComponent implements OnInit {
users :any 
 buttonlabel = "Add New friend"
 displayForm:boolean;
  constructor(private remote:RemoteserviceService, private router: Router) { }
 
  ngOnInit() {    
   
    this.getall()
    this.buttonlabel = "Add New Friend"
  }
  displayFormNow = function(){
    this.displayForm = true
  }
  DeleteFriend(id){
    this.remote.deleteFriend(id).subscribe(
      (data)=>{
        console.log("success");
        this.getall()
        
      }
    )

  }
  saveFriend(formvalue){
    var friends = {};
    friends={
      "name" : formvalue.name,
            "location" : formvalue.location,
            "years" : formvalue.years
    }
    this.remote.addFriend(friends).subscribe(
      (data)=>{
        console.log("success");
        this.getall()
      }
    )
  }
  getall(){
    this.remote.getRemoteData().subscribe(
      (data)=>{
      this.users = data
      console.log("Success")
      console.log(this.users)
    },
    (error)=>{
      console.log("Error")
      console.log(error)
    })
  }
  UpdateFriendSPA(id){
    this.router.navigate(["/updatefriend",id])
  }
  

  
  }


