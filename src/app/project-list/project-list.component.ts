import { projects } from './../mocks/project.mock';
import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor() { }

  projects:Project[] = projects;
  search:string;

  ngOnInit(): void {
  }

}
