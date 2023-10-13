import { Component, OnInit } from '@angular/core';
import { Chip, Recentbookmark } from 'src/app/Model/folder';
import { BookmarkService } from 'src/app/bookmark.service';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss'],
  styles: [`
    .fade {
      opacity: 1;
      transition: opacity 0.5s ease-in-out;
    }

    .fade-hidden {
      opacity: 0;
    }
  `],
})
export class TopPageComponent implements OnInit {
  recentBookmark!: Recentbookmark[];
  activeChip: Chip = {
    chipName: 'All',
    active: true
  }

  constructor(public dataService: BookmarkService) { }

  ngOnInit(): void {
    this.recentBookmark = this.dataService.getRecentBookmark();
  }

  filterCategory(category: string) {
    this.recentBookmark = this.dataService.filterRecentBookmark(category);
    console.log(this.recentBookmark)
  }
}
