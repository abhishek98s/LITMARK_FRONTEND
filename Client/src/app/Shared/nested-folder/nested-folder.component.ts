import { Component, Input } from '@angular/core';
import { Folder } from 'src/app/Model/folder';

@Component({
  selector: 'nested-folder',
  templateUrl: './nested-folder.component.html',
  styleUrls: ['./nested-folder.component.scss']
})
export class NestedFolderComponent {
  @Input() data!: Folder;

}
