import { Component, OnInit } from '@angular/core';
import { departments } from '../mocks/department.mock';
import { Department } from '../models/departments.model';

@Component({
  selector: 'app-department-menu',
  templateUrl: './department-menu.component.html',
  styleUrls: ['./department-menu.component.css']
})
export class DepartmentMenuComponent implements OnInit {

  constructor() { }

  departments : Department[] = departments;

  ngOnInit(): void {
  }

}
