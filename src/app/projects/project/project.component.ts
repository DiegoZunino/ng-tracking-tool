import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/project.model";
import {SearchFilters} from "../../models/search-filters.model";
import {ProjectService} from "../services/project.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit{
  public selectedProject?: Project;
  public searchFilters!: SearchFilters;
  public projects: Project[] = [];

  constructor(private projectService: ProjectService, private router: Router) {}

  selectProject(project: Project) {
    this.router.navigateByUrl(`/projects/${project.id}`);
  }

  submitProjectForm(project: Project) {
    this.projects = this.projectService.add(project);
    console.log(this.projects);
  }

  searchProject(filters: SearchFilters) {
    this.searchFilters = filters;
  }

  ngOnInit(): void {
    this.projects = this.projectService.getAll()
  }
}