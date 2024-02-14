import { Component, Input } from '@angular/core';
import { FolderSearchObject } from 'src/app/Model/folder';

@Component({
  selector: 'app-folder-search',
  templateUrl: './folder-search.component.html',
  styleUrls: ['./folder-search.component.scss']
})
export class FolderSearchComponent {
  @Input() folder!: FolderSearchObject;
}
