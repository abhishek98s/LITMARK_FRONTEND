import { Component, Input } from '@angular/core';
import { Recentbookmark } from 'src/app/Model/folder';
import { BookmarkService } from 'src/app/bookmark.service';

@Component({
  selector: 'app-recent-bookmark',
  templateUrl: './recent-bookmark.component.html',
  styleUrls: ['./recent-bookmark.component.scss']
})
export class RecentBookmarkComponent {
  openDropdown: boolean = false;
  @Input() recentBookmark!: Recentbookmark;

  constructor(public dataService: BookmarkService) { };

  toggleDropdown() {
    this.openDropdown = !this.openDropdown
  }

  deleteRecentBookmark(id: number) {
    this.dataService.deleteRecentBookmark(id);
  }
}
