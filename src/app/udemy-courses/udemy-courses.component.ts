import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course-service';
import { Course } from '../model/Course';

@Component({
  selector: 'app-udemy-courses',
  templateUrl: './udemy-courses.component.html',
  styleUrls: ['./udemy-courses.component.scss']
})
export class UdemyCoursesComponent implements OnInit {

  courseList: Course[] = []
  slides: any[] = []
  currentImage: string = ""
  imgIndex: number = 0
  totalImgs: number = 0

  constructor(private service: CourseService) { }

  ngOnInit(): void {
    this.service.listCourses().subscribe(data => {
      this.courseList = data
      console.log(data)
      console.log(this.courseList[0].imgName)
      this.currentImage = this.courseList[0].imgName
      this.totalImgs = this.courseList.length;
    })
  }

  listCourses() {
    this.service.listCourses().subscribe(data => {
      this.courseList = data
      console.log(data)
      console.log(this.courseList[0].imgName)

    })
  }

  getSlides() {
    this.courseList.forEach((course, index) => {
      this.slides[index] = {
        src: './assets/img/udemy/' + course.imgName
      }
    })
  }

  imgNext() {
    if (this.imgIndex === this.courseList.length-1) {
      this.imgIndex = 0
      this.currentImage = this.courseList[this.imgIndex].imgName
    }
    else {
      this.imgIndex = this.imgIndex + 1;
      this.currentImage = this.courseList[this.imgIndex].imgName
    }


  }
  imgPrev() {
    if (this.imgIndex === 0) {
      this.imgIndex = this.courseList.length-1
      this.currentImage = this.courseList[this.imgIndex].imgName
    }
    else {
      this.imgIndex = this.imgIndex - 1;
      this.currentImage = this.courseList[this.imgIndex].imgName
    }

  }
}
