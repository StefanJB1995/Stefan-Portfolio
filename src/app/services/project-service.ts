import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, pluck } from "rxjs";
import { Project } from "../model/Project";

@Injectable({
    providedIn: 'root'
})

export class ProjectService {

    url = '/assets/projects.json';

    constructor(private httpClient: HttpClient) { }

    listProject(): Observable<Project[]> {
        return this.httpClient.get<Project[]>(this.url).pipe(
            map((projects : any) => projects['project'] as Project[] )
        )
    }
}