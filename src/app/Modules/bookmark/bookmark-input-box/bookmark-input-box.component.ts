import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { bookmarkResponse } from 'src/app/Model/bookmark.model';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { FolderService } from 'src/app/services/folder.service';
import { InputElementService } from 'src/app/services/input-element.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-bookmark-input-box',
  templateUrl: './bookmark-input-box.component.html',
  styleUrls: ['./bookmark-input-box.component.scss']
})
export class BookmarkInputBoxComponent {
  @ViewChild('bookmarkInputElement') bookmarkInputElement!: ElementRef;

  @Input() parentFolderId!: number;

  bookmarkLink: string = "";
  bookmarkUniqueString = 'bookmark-input-box'

  constructor(private dropDownService: dropDownService, private folderService: FolderService, private bookmarkService: BookmarkService, private toast: ToastService, private InputElementService: InputElementService) { }

  @Output() bookmarkInputEvent = new EventEmitter<ElementRef>();

  ngAfterViewInit() {
    this.bookmarkInputEvent.emit(this.bookmarkInputElement);
  }

  isValidURL(url: string) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }

  submitBookmarkForm() {
    const isUrlValid = this.isValidURL(this.bookmarkLink)
    if (!this.bookmarkLink) {
      this.dropDownService.closeDropdown(this.bookmarkUniqueString);
      return
    }
    if (!isUrlValid) {
      this.toast.error('Enter Valid Url')
    }
    this.bookmarkService.addBookmark({ url: this.bookmarkLink, folder_id: this.parentFolderId });
    this.bookmarkLink = "";
    this.dropDownService.clearDropdowns();
  }
}
