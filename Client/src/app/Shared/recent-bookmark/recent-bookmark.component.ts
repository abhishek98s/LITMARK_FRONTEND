import { Component, Input } from '@angular/core';
import { Recentbookmark } from 'src/app/Model/folder';
import { BookmarkService } from 'src/app/bookmark.service';

@Component({
  selector: 'app-recent-bookmark',
  templateUrl: './recent-bookmark.component.html',
  styleUrls: ['./recent-bookmark.component.scss']
})
export class RecentBookmarkComponent {
  @Input() recentBookmark!: Recentbookmark;

  constructor(public dataService: BookmarkService) { };

  deleteBookmark(id: number) {
    this.dataService.deleteBookmark(id);
  }
}
