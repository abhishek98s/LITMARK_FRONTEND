import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { FolderService } from 'src/app/services/folder.service';

@Component({
  selector: 'app-bookmark-input-box',
  templateUrl: './bookmark-input-box.component.html',
  styleUrl: './bookmark-input-box.component.scss'
})
export class BookmarkInputBoxComponent {
  @ViewChild('bookmarkInputElement') bookmarkInputElement!: ElementRef;

  bookmarkName: string = "";
  bookmarkUniqueString = 'bookmark-input-box'

  constructor(private dropDownService: dropDownService, private folderService: FolderService, private bookmarkService: BookmarkService) { }

  @Output() bookmarkInputEvent = new EventEmitter<ElementRef>();

  ngAfterViewInit() {
    this.bookmarkInputEvent.emit(this.bookmarkInputElement);
  }
  
  submitBookmarkForm() {
    if (!this.bookmarkName) {
      this.dropDownService.closeDropdown(this.bookmarkUniqueString);
      return
    }
    this.bookmarkService.addBookmark(this.bookmarkName);
    this.bookmarkName = "";
    this.dropDownService.clearDropdowns();
  }
}
