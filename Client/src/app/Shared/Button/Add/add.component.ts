import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-folder',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  @Input() value!: string;
  @Input() icon!: string;

}
