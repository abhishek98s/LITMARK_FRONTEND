import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { bookmarkResponse } from 'src/app/Model/bookmark.model';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { FolderService } from 'src/app/services/folder.service';
import { InputElementService } from 'src/app/services/input-element.service';

@Component({
  selector: 'app-bookmark-input-box',
  templateUrl: './bookmark-input-box.component.html',
  styleUrl: './bookmark-input-box.component.scss'
})
export class BookmarkInputBoxComponent {
  @ViewChild('bookmarkInputElement') bookmarkInputElement!: ElementRef;

  @Input() parentFolderId!: number;

  bookmarkLink: string = "";
  bookmarkUniqueString = 'bookmark-input-box'

  constructor(private dropDownService: dropDownService, private folderService: FolderService, private bookmarkService: BookmarkService, private InputElementService: InputElementService) { }

  @Output() bookmarkInputEvent = new EventEmitter<ElementRef>();

  ngAfterViewInit() {
    this.bookmarkInputEvent.emit(this.bookmarkInputElement);
  }

  submitBookmarkForm() {
    if (!this.bookmarkLink) {
      this.dropDownService.closeDropdown(this.bookmarkUniqueString);
      return
    }
    this.bookmarkService.addBookmark({ url: this.bookmarkLink, folder_id: this.parentFolderId }).subscribe({
      next: (res: bookmarkResponse) => {
        this.bookmarkService.pushBookmark(res.data)
      }
    });
    this.bookmarkLink = "";
    this.dropDownService.clearDropdowns();
  }
}
