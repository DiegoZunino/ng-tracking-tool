import {Component, EventEmitter, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Project} from "../../models/project.model";

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent {
    @Output() onSubmit = new EventEmitter<Project>()

    submitProjectForm(projectForm: NgForm) {
        const project = {
            id: 0,
            code: Math.random().toString(36).replace('0.', '').substring(2, 9),
            done: false,
            tasks: [],
            ...projectForm.value
        };
        this.onSubmit.emit(project);
        projectForm.reset();
    }
}
