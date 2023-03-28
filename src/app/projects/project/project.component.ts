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
export class ProjectComponent implements OnInit {
  public searchFilters!: SearchFilters;
  public projects: Project[] = [];

  constructor(private projectService: ProjectService, private router: Router) {}

  private updateProjects() {
    this.projectService.getAll().subscribe(
        (projects) => this.projects = projects
    )
  }

  ngOnInit(): void {
      this.updateProjects()
  }

  selectProject(project: Project) {
    this.router.navigateByUrl(`/projects/${project.id}`);
  }

  submitProjectForm(project: Project) {
    this.projectService.add(project).subscribe(
        () => this.updateProjects()
    );
  }

  searchProject(filters: SearchFilters) {
    this.searchFilters = filters;
  }
}