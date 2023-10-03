import { Component, Input } from '@angular/core';
import { Recentbookmark } from 'src/app/Model/folder';

@Component({
  selector: 'app-recent-bookmark',
  templateUrl: './recent-bookmark.component.html',
  styleUrls: ['./recent-bookmark.component.scss']
})
export class RecentBookmarkComponent {
  @Input() recentBookmark!: Recentbookmark;
}
