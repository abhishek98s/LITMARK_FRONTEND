import { Component, OnInit } from '@angular/core';
import { Chip, Recentbookmark } from 'src/app/Model/folder';
import { BookmarkService } from 'src/app/bookmark.service';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss'],
})
export class TopPageComponent implements OnInit {
  recentBookmark!: Recentbookmark[];

  constructor(public dataService: BookmarkService) { }

  ngOnInit(): void {
    this.dataService.myBehaviorSubject.subscribe((value) => this.recentBookmark = value);
  }

  filterCategory(category: string) {
    this.dataService.filterRecentBookmark(category);
  }
}
