import { Component, ElementRef, HostListener, Input, OnInit, ViewChild, viewChild } from '@angular/core';
import { Bookmark, bookmarkResponse } from 'src/app/Model/bookmark.model';
import { recentBookmarkService } from 'src/app/services/recentbookmark.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { InputElementService } from 'src/app/services/input-element.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
  @ViewChild(`bookmarkDropdown`) dropdownElement!: ElementRef;
  @ViewChild('bookmarkUpdateForm') updateForm!: ElementRef;

  @Input() bookmark!: Bookmark;

  constructor(public dataService: recentBookmarkService, public bookmarkService: BookmarkService, public dropDownService: dropDownService, private inputElementService: InputElementService) { }

  uniqueString = ''
  bookmarkThumbnail = ''
  bookmarkInputBoxString = 'bookmark-input-box-string'
  updatedBookmarkName = ''

  ngOnInit(): void {
    this.uniqueString = this.bookmark.id.toString() + this.bookmark.title;
    this.bookmarkInputBoxString = this.bookmark.id.toString() + this.bookmark.image_url
    this.bookmarkService.getBookmarkThumbnail(this.bookmark.image_id).subscribe({
      next: (res: bookmarkResponse) => {
        this.bookmark.image_url = res.data.url
      },
    })
  }

  toggleBookmarkMenu(event: Event) {
    event.stopPropagation();
    this.dropDownService.toggle(this.uniqueString)
  }

  toggleBookmarkInput(event: Event) {
    event.stopPropagation();
    setTimeout(() => this.inputElementService.onFocus(this.updateForm))
    this.dropDownService.toggle(this.bookmarkInputBoxString)
  }

  renameBookmark(id: number) {
    this.bookmarkService.updateBookmarkname(id, this.updatedBookmarkName).subscribe({
      next: () => {
        this.bookmarkService.renameBookmark(id, this.updatedBookmarkName);
        this.dropDownService.clearDropdowns();
      }
    })
  }

  deleteBookmark(id: number) {
    this.bookmarkService.deleteBookmark(id).subscribe({
      next: (res: bookmarkResponse) => {
        this.bookmarkService.removeBookmark(id)
      }
    });
    this.dropDownService.clearDropdowns()
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropDownService.isOpen(this.bookmarkInputBoxString) && !this.updateForm.nativeElement.contains(event.target)) {
      this.dropDownService.clearDropdowns();
    }

    if (this.dropDownService.isOpen(this.uniqueString) === false) { return }
    if (this.dropDownService.isOpen(this.uniqueString) && !this.dropdownElement.nativeElement.contains(event.target)) {
      this.dropDownService.clearDropdowns();
    }
  }
}
