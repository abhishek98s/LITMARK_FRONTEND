import { Component, Input } from '@angular/core';
import { folderData } from 'src/app/Model/folder';

@Component({
  selector: 'app-folder-data',
  templateUrl: './folder-data.component.html',
  styleUrls: ['./folder-data.component.scss']
})
export class FolderDataComponent {
  @Input() data!: folderData;

}
