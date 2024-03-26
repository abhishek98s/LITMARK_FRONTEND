import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Recentbookmark } from 'src/app/Model/recentbookmark.model';
import { recentBookmarkService } from 'src/app/services/recentbookmark.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { getCurrentDate } from 'src/app/utils/date';

@Component({
  selector: 'app-recent-bookmark',
  templateUrl: './recent-bookmark.component.html',
  styleUrls: ['./recent-bookmark.component.scss']
})
export class RecentBookmarkComponent implements OnInit {
  @ViewChild('recentBookmarkMenu') dropdownElement!: ElementRef;

  @Input() recentBookmark!: Recentbookmark;

  uniqueString = '';

  constructor(public dataService: recentBookmarkService, public dropDownService: dropDownService) { };

  ngOnInit(): void {
    this.recentBookmark.click_date = getCurrentDate(this.recentBookmark.click_date);
    this.uniqueString = this.recentBookmark.id.toString() + this.recentBookmark.title;
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

  toggleDropdown(event: Event) {
    this.dropDownService.toggle(this.uniqueString)
    event.stopPropagation();
  }

  deleteRecentBookmark(id: number) {
    this.dataService.deleteRecentBookmark(id);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropDownService.isOpen(this.uniqueString) === false) { return }
    if (this.dropDownService.isOpen(this.uniqueString) && !this.dropdownElement.nativeElement.contains(event.target)) {
      this.dropDownService.clearDropdowns();
    }
  }
}







