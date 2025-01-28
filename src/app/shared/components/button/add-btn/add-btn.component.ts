import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-folder',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.scss']
})
export class AddBtnComponent {
  @Input() value!: string;
  @Input() icon!: string;

}
