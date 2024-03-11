import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Bookmark } from 'src/app/Model/bookmark.model';
import { recentBookmarkService } from 'src/app/services/recentbookmark.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { BookmarkService } from 'src/app/services/bookmark.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
  @ViewChild(`bookmarkDropdown`) dropdownElement!: ElementRef;

  @Input() bookmark!: Bookmark;

  constructor(public dataService: recentBookmarkService, public bookmarkService: BookmarkService, public dropDownService: dropDownService) { }

  uniqueString = ''

  ngOnInit(): void {
    this.uniqueString = this.bookmark.id.toString() + this.bookmark.title;
  }

  getHostnameFromUrl(url: string) {
    const pattern = /https?:\/\/(?:www\.)?([^/?]+)/i;
    const match = url.match(pattern);
    if (match) {
      return match[1];
    } else {
      return null;
    }
  }

  toggleBookmarkMenu(event: Event) {
    this.dropDownService.toggle(this.uniqueString)
    event.stopPropagation();
  }

  deleteBookmark(id: number) {
    this.bookmarkService.deleteBookmark(id);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropDownService.isOpen(this.uniqueString) === false) { return }
    if (this.dropDownService.isOpen(this.uniqueString) && !this.dropdownElement.nativeElement.contains(event.target)) {
      this.dropDownService.clearDropdowns();
    }
  }
}
