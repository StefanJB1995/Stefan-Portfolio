import { Component, OnInit } from '@angular/core';
import { Project } from '../model/Project';
import { ProjectService } from '../services/project-service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectList: Project[] = []
  message = "hello"
  domDocument: any;

  constructor(private service: ProjectService) { }

  ngOnInit(): void {

    this.refreshProjects();
  }

  refreshProjects() {
    this.service.listProject().subscribe(data => {
      this.projectList = data
      console.log("test")
      console.log(JSON.stringify(this.projectList))
      console.log(this.projectList);
      
    })
  }
}
