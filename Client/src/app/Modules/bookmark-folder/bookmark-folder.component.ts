import { Component } from '@angular/core';
import { BookmarkService } from 'src/app/bookmark.service';

@Component({
  selector: 'app-bookmark-folder',
  templateUrl: './bookmark-folder.component.html',
  styleUrls: ['./bookmark-folder.component.scss']
})
export class BookmarkFolderComponent {
  userInputtedFodlerName: string = "";
  userInputtedBookmarkName: string = "";

  constructor(public dataService: BookmarkService) { };

  toggleFolderInputBox() {
    this.dataService.folderInputbox = !this.dataService.folderInputbox;
    this.dataService.bookmarkInputbox = false;
    this.userInputtedFodlerName = "";
  }

  submitFolderForm() {
    if (this.userInputtedFodlerName) {
      this.dataService.addFolder(this.userInputtedFodlerName);
      this.userInputtedFodlerName = "";
      return;
    }
    alert("no")
  }

  toggleBookmarkInputBox() {
    this.dataService.bookmarkInputbox = !this.dataService.bookmarkInputbox;
    console.log(this.dataService.folderInputbox)
    this.dataService.folderInputbox = false;
    this.userInputtedBookmarkName = "";
  }

  submitBookmarkForm() {
    if (this.userInputtedBookmarkName) {
      this.dataService.addBookmark(this.userInputtedBookmarkName);
      this.userInputtedBookmarkName = "";
      return
    }
    alert("enpty?")
  }
}
