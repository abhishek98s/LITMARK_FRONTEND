import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teritary-btn',
  templateUrl: './teritary-btn.component.html',
  styleUrls: ['./teritary-btn.component.scss']
})
export class TeritaryBtnComponent {
  @Input() value!: string;

}
