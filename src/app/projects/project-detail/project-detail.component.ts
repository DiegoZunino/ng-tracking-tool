import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {Project} from "../../models/project.model";
import {ProjectService} from "../services/project.service";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit{
  project$?: Observable<Project>
  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectService) {}

  ngOnInit(): void {
    this.project$ = this.activatedRoute.paramMap.pipe(
        switchMap((params) => {
          const id = +(params.get('id') || 0)
          return this.projectService.get(id);
        })
    )
  }
}