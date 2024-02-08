import { Component } from '@angular/core';
import { BookmarkService } from 'src/app/services/recentbookmark.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-bookmark-folder',
  templateUrl: './bookmark-folder.component.html',
  styleUrls: ['./bookmark-folder.component.scss']
})
export class BookmarkFolderComponent {
  userInputtedNestedFodlerName: string = "";
  userInputtedBookmarkName: string = "";

  constructor(public dataService: BookmarkService, public stateService:StateService) { };

  toggleFolderInputBox() {
    this.stateService.state.folderInputbox = !this.stateService.state.folderInputbox;
    this.stateService.state.bookmarkInputbox = false;
    this.userInputtedNestedFodlerName = "";
  }

  submitFolderForm() {
    if (this.userInputtedNestedFodlerName) {
      this.dataService.addNestedFolder(this.userInputtedNestedFodlerName);
      this.userInputtedNestedFodlerName = "";
      return;
    }
    alert("no")
  }

  toggleBookmarkInputBox() {
    this.stateService.state.bookmarkInputbox = !this.stateService.state.bookmarkInputbox;
    console.log(this.stateService.state.folderInputbox)
    this.stateService.state.folderInputbox = false;
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
