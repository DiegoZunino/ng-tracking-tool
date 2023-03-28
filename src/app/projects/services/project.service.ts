import {Injectable} from "@angular/core";
import {Project} from "../../models/project.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    constructor(private httpClient: HttpClient) {}

    add(project: Project): Observable<Project> {
        return this.httpClient.post<Project>(`${environment.baseUrl}/projects`, project)
    }

    get(id: number): Observable<Project> {
        return this.httpClient.get<Project>(`${environment.baseUrl}/projects/${id}`);
    }

    getAll(): Observable<Project[]> {
        return this.httpClient.get<Project[]>(`${environment.baseUrl}/projects`);
    }
}