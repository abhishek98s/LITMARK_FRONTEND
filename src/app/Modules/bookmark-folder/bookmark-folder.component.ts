import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { FolderService } from 'src/app/services/folder.service';
import { recentBookmarkService } from 'src/app/services/recentbookmark.service';
import { sidebarFolderService } from 'src/app/services/sidebarFolder.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-bookmark-folder',
  templateUrl: './bookmark-folder.component.html',
  styleUrls: ['./bookmark-folder.component.scss']
})
export class BookmarkFolderComponent {
  @ViewChild('folderInputBox') folderInputBox!: ElementRef;
  @ViewChild('folderInputElement') folderInputElement!: ElementRef;

  @ViewChild('bookmarkInputBox') bookmarkInputBox!: ElementRef;
  @ViewChild('bookmarkInputElement') bookmarkInputElement!: ElementRef;

  fodlerName: string = "";
  bookmarkName: string = "";

  folderUniqueString = 'folder-input-box'
  bookmarkUniqueString = 'bookmark-input-box'

  constructor(public dataService: recentBookmarkService, public bookmarkService: BookmarkService, public folderService: FolderService, public dropDownService: dropDownService, public stateService: StateService) {
    this.dropDownService.clearDropdowns()
  };

  stopPropagation(event: Event) {
    event.stopPropagation()
  }

  toggleFolderInputBox(event: Event) {
    if (this.dropDownService.isOpen(this.folderUniqueString)) {
      this.dropDownService.closeDropdown(this.folderUniqueString);
    } else {
      this.dropDownService.openDropdown(this.folderUniqueString); 
      setTimeout(() => this.folderInputElement.nativeElement.focus())
    }
    event.stopPropagation();
    this.fodlerName = '';
  }

  toggleBookmarkInputBox(event: Event) {
    if (this.dropDownService.isOpen(this.bookmarkUniqueString)) {
      this.dropDownService.closeDropdown(this.bookmarkUniqueString);
    } else {
      this.dropDownService.openDropdown(this.bookmarkUniqueString);
      setTimeout(() => this.bookmarkInputElement.nativeElement.focus())
    }
    event.stopPropagation();
    this.bookmarkName = "";
  }

  submitFolderForm() {
    if (!this.fodlerName) {
      this.dropDownService.closeDropdown(this.folderUniqueString);
      return
    }
    this.folderService.addNestedFolder(this.fodlerName);
    this.fodlerName = "";
    this.dropDownService.closeDropdown(this.folderUniqueString);
  }

  submitBookmarkForm() {
    if (!this.bookmarkName) {
      this.dropDownService.closeDropdown(this.bookmarkUniqueString);
      return
    }
    this.bookmarkService.addBookmark(this.bookmarkName);
    this.bookmarkName = "";
    this.dropDownService.closeDropdown(this.bookmarkUniqueString);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if ((this.dropDownService.isOpen(this.folderUniqueString) || this.dropDownService.isOpen(this.bookmarkUniqueString)) === false) return
    if (this.dropDownService.isOpen(this.folderUniqueString) && !this.folderInputBox.nativeElement.contains(event.target)) {
      this.fodlerName = '';
      this.dropDownService.clearDropdowns();
    }

    if (this.dropDownService.isOpen(this.bookmarkUniqueString) && !this.folderInputBox.nativeElement.contains(event.target)) {
      this.fodlerName = '';
      this.dropDownService.clearDropdowns();
    }
  }
}
