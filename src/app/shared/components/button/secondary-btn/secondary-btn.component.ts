import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-secondary-btn',
  templateUrl: './secondary-btn.component.html',
  styleUrls: ['./secondary-btn.component.scss']
})
export class SecondaryBtnComponent {
  @Input() value!: string;

}
