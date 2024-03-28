import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  titles: string[] = ['Web Developer', 'Frontend Developer', 'Web Developer'];
  currentIndex: number = 0;
  title: string = this.titles[0];

  ngOnInit() {
    this.changeTitle();
  }

  changeTitle(repetitions: number = 0) {
 
  }
}