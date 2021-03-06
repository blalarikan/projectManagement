import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project.model';

@Pipe({
  name: 'projectSearch'
})
export class ProjectSearchPipe implements PipeTransform {

  transform(value: Project[], searchKey:string): Project[] {
    return searchKey != undefined ? value.filter(pr=>pr.name?.toLowerCase().includes(searchKey.toLowerCase()))
    : value;
  }

}
