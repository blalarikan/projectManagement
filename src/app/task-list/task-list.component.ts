import { Task } from './../models/task.model';
import { projects } from './../mocks/project.mock';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }
  @Input('tasksOfProject') tasks?: Task[]

  ngOnInit(): void {
  }

}
