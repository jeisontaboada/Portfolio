import { Component } from '@angular/core';
import { ProjectsCardsComponent } from '../re-use/projects-cards/projects-cards.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectsCardsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
