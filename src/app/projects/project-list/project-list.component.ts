import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Project} from "../../models/project.model";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  @Input() projects: Project[] = [];
  @Output() onSelect = new EventEmitter<Project>();

  selectProject(project: Project) {
    this.onSelect.emit(project);
  }
}
