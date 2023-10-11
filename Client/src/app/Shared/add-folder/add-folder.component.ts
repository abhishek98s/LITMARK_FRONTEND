import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-folder',
  templateUrl: './add-folder.component.html',
  styleUrls: ['./add-folder.component.scss']
})
export class AddFolderComponent {
  @Input() value!: string;
  @Input() icon!: string;

}
