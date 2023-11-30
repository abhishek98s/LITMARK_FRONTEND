import { Component, Input } from '@angular/core';
import { Bookmark } from 'src/app/Model/folder';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent {
  @Input() bookmark!: Bookmark;
  openBookmarkMenu: Boolean = false;

  toggleBookmarkMenu() {
    this.openBookmarkMenu = !this.openBookmarkMenu;
  }

  deleteBookmark(id: number) {

  }
}
