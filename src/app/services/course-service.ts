import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Course } from "../model/Course";

@Injectable({
    providedIn: 'root'
})

export class CourseService {

    url = '/assets/udemy_courses.json';

    constructor(private httpClient: HttpClient) { }

    listCourses(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.url).pipe(
            map((courses : any) => courses['course'] as Course[] )
        )
    }
}