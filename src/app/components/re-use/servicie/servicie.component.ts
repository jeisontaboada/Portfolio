import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-servicie',
  standalone: true,
  imports: [],
  templateUrl: './servicie.component.html',
  styleUrl: './servicie.component.css'
})
export class ServicieComponent {

  @Input() title:String | undefined
  @Input() img:String | undefined
  @Input() description:String | undefined

}
