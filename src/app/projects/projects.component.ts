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
  currentProjectsList: Project[] = []
  domDocument: any;
  projectFrom:number = 0;
  projectTo: number = 0;

  constructor(private service: ProjectService) { }

  ngOnInit(): void {

    this.refreshProjects();

  }

  refreshProjects() {
    this.service.listProject().subscribe(data => {
      this.projectList = data
      console.log("test")
      //console.log(JSON.stringify(this.projectList))
      //console.log(this.projectList);
      this.updateCurrentList(0,3);
    })
  }

  updateCurrentList(from:number, to:number) {
    this.currentProjectsList = this.projectList.slice(from, to)
    console.log(this.currentProjectsList)
    this.projectFrom = from;
    this.projectTo = to;
    console.log(this.currentProjectsList[0].imgName)
  }

  changePage(event:any) {
    console.log(event);
    console.log(event.previousPageIndex);
    if(event.pageIndex > event.previousPageIndex) {
      this.updateCurrentList(this.projectFrom+3, this.projectTo+3);
    }
    else {
      this.updateCurrentList(this.projectFrom-3, this.projectTo-3);
    }
  }
}
