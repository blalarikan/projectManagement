import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit,AfterContentChecked {

  constructor() { }

  @Input("activeproject") project:Project;

  inCompletedTaskCount? : number = 0;
  isTaskFound?:boolean=true;


  ngOnInit(): void {
   
  }

  ngAfterContentChecked(): void {
    this.inCompletedTaskCount = this.project?.tasks?.filter(task => !task.isDone).length;
    this.isTaskFound = this.inCompletedTaskCount != undefined && this.inCompletedTaskCount>0
}

}