import {Injectable} from "@angular/core";
import {Project} from "../../models/project.model";

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private projects: Project[] = [
        {
            id: 1,
            code: 'NHusYJl',
            name: 'Progetto Alpha',
            description: 'Lorem ipsum dolor sit amet.',
            start: new Date(2019, 1, 30),
            end: new Date(2019, 3, 15),
            priority: 'medium',
            done: true,
            tasks: []
        },
        {
            id: 2,
            code: 'SJieYKl',
            name: 'Progetto Beta',
            description: 'Lorem ipsum dolor sit amet.',
            start: new Date(2019, 3, 30),
            end: new Date(2019, 6, 15),
            priority: 'low',
            done: true,
            tasks: []
        },
        {
            id: 3,
            code: 'POjeGBs',
            name: 'Progetto Gamma',
            description: 'Lorem ipsum dolor sit amet.',
            start: new Date(2019, 8, 15),
            priority: 'low',
            done: false,
            tasks: []
        },
    ];

    add(project: Project): Project[] {
        this.projects = [{...project, id: this.projects.length + 1}, ...this.projects];
        return this.projects;
    }

    get(id: number): Project | undefined {
        return this.projects.find((project) => project.id === id);
    }

    getAll(): Project[] {
        return this.projects;
    }
}