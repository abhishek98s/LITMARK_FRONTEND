import { Component } from '@angular/core';
import { BookmarkService } from 'src/app/bookmark.service';

@Component({
  selector: 'app-bookmark-folder',
  templateUrl: './bookmark-folder.component.html',
  styleUrls: ['./bookmark-folder.component.scss']
})
export class BookmarkFolderComponent {
  userInputtedFodlerName: string = "";

  constructor(public dataService: BookmarkService) { };

  toggleFolderInputBox() {
    this.dataService.folderInputbox = !this.dataService.folderInputbox;
    this.userInputtedFodlerName = "";
  }

  submitFolderForm() {
    this.dataService.addFolder(this.userInputtedFodlerName);
    this.userInputtedFodlerName = "";
  }
}
