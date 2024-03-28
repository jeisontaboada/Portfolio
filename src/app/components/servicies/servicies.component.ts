import { Component } from '@angular/core';
import { ServicieComponent } from '../re-use/servicie/servicie.component';

@Component({
  selector: 'app-servicies',
  standalone: true,
  imports: [ServicieComponent],
  templateUrl: './servicies.component.html',
  styleUrl: './servicies.component.css'
})
export class ServiciesComponent {

}
