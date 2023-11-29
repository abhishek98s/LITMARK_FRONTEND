import { Component, Input } from '@angular/core';
import { Folder } from 'src/app/Model/folder';
import { BookmarkService } from 'src/app/bookmark.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent {
  @Input() folder!: Folder;

  constructor(public dataService: BookmarkService) { }

  deleteFolder(id: number) {
    this.dataService.deleteFolder(id)
    console.log(id)
  }
}
