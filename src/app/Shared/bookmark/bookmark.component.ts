import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Bookmark } from 'src/app/Model/folder';
import { BookmarkService } from 'src/app/bookmark.service';
import { FlagService } from 'src/app/services/flag.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
  @ViewChild(`bookmarkDropdown`) dropdownElement!: ElementRef;

  @Input() bookmark!: Bookmark;

  constructor(public dataService: BookmarkService, public dropdownService: FlagService) { }

  uniqueString = ''

  ngOnInit(): void {
    this.uniqueString = this.bookmark.id.toString() + this.bookmark.title;
  }

  toggleBookmarkMenu(event: Event) {
    if (this.dropdownService.isOpen(this.uniqueString)) {
      this.dropdownService.closeDropdown(this.uniqueString);
    } else {
      this.dropdownService.openDropdown(this.uniqueString);
    }
    event.stopPropagation();
  }

  deleteBookmark(id: number) {
    this.dataService.deleteBookmark(id);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropdownService.isOpen(this.uniqueString) === false) { return }
    if (this.dropdownService.isOpen(this.uniqueString) && !this.dropdownElement.nativeElement.contains(event.target)) {
      this.dropdownService.clearDropdowns();
    }
  }
}
