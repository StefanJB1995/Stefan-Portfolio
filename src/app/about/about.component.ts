import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  longText = `Stefan has almost 2 years of professional experience in Computer Science. 
        He has completed different projects in CEGEP, university and internships. 
        Some of the projects he worked on improved his coding, documenting, planning, and testing expertise. He is always open to new challenges that can help him become a better programmer and help client’s ideas come to life.`;

}
