import { Component, Input } from '@angular/core';
import { Bookmark } from 'src/app/Model/folder';
import { BookmarkService } from 'src/app/bookmark.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent {
  @Input() bookmark!: Bookmark;
  openBookmarkMenu: Boolean = false;

  constructor(public dataService: BookmarkService) { }

  toggleBookmarkMenu() {
    this.openBookmarkMenu = !this.openBookmarkMenu;
  }

  deleteBookmark(id: number) {
    this.dataService.deleteBookmark(id);
  }
}
