import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit {

  constructor() { }
  todo = ""
  tasks = []
  addtask(mytask){
    alert(mytask.todo)
    this.tasks.push(mytask.todo)
    this.todo = ""
  }completeTask(current){
    this.tasks.splice(current,1)
  }
  
  ngOnInit() {
  }

}
