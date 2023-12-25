import { Component, Input } from '@angular/core';
import { Folder } from 'src/app/Model/folder';
import { BookmarkService } from 'src/app/bookmark.service';

@Component({
  selector: 'nested-folder',
  templateUrl: './nested-folder.component.html',
  styleUrls: ['./nested-folder.component.scss']
})
export class NestedFolderComponent {
  @Input() data!: Folder;
  menuOpen: boolean = false;

  constructor(public dataService: BookmarkService){}

  toggleMenu() {
    this.menuOpen = !this.menuOpen
  }

  deleteNestedFolder(id: number) {
    this.dataService.deleteNestedFolder(id);
  }
}
