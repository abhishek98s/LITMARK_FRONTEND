import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Recentbookmark } from 'src/app/Model/folder';
import { BookmarkService } from 'src/app/services/recentbookmark.service';
import { dropDownService } from 'src/app/services/dropdown.service';

@Component({
  selector: 'app-recent-bookmark',
  templateUrl: './recent-bookmark.component.html',
  styleUrls: ['./recent-bookmark.component.scss']
})
export class RecentBookmarkComponent implements OnInit {
  @ViewChild('recentBookmarkMenu') dropdownElement!: ElementRef;

  @Input() recentBookmark!: Recentbookmark;

  uniqueString = '';

  constructor(public dataService: BookmarkService, public dropdownService: dropDownService) {};

  ngOnInit(): void {
    this.uniqueString = this.recentBookmark.id.toString() + this.recentBookmark.title;
  }

  toggleDropdown(event: Event) {
    if (this.dropdownService.isOpen(this.uniqueString)) {
      this.dropdownService.closeDropdown(this.uniqueString);
    } else {
      this.dropdownService.openDropdown(this.uniqueString);
    }
    event.stopPropagation();
  }

  deleteRecentBookmark(id: number) {
    this.dataService.deleteRecentBookmark(id);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropdownService.isOpen(this.uniqueString) === false) { return }
    if (this.dropdownService.isOpen(this.uniqueString) && !this.dropdownElement.nativeElement.contains(event.target)) {
      this.dropdownService.clearDropdowns();
    }
  }
}







