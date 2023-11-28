import { Component, Input } from '@angular/core';
import { Folder } from 'src/app/Model/folder';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent {
  @Input() folder!: Folder;

}
