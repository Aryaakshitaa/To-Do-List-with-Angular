import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../module';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }
  @Input() myTasks: Array<Task> = [];

  ngOnInit(): void {
  }

  crossTask(index: number) {
    let i = (<HTMLInputElement>document.getElementById("check" + index));
    if (i?.checked == true)
      this.myTasks[index].checked = true;
    else
      this.myTasks[index].checked = false;
  }

  clearTask() {
    for (let i = this.myTasks.length - 1; i >= 0; i--) {
      if (this.myTasks[i].checked == true) {
        this.myTasks.splice(i, 1);
        console.log(i)
      }
    }
  }
}
