import { Component, OnInit } from '@angular/core';
import { Recentbookmark } from 'src/app/Model/recentbookmark.model';
import { recentBookmarkService } from 'src/app/services/recentbookmark.service';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss'],
})
export class TopPageComponent implements OnInit {
  recentBookmark!: Recentbookmark[];

  searchType = 'recent-bookmark'

  constructor(public dataService: recentBookmarkService) { }

  ngOnInit(): void {
    this.dataService.recentBookmarkObservable.subscribe((value) => this.recentBookmark = value);
  }

  filterRecentBookmarkCategory(category: string) {
    this.dataService.filterRecentBookmarkByChip(category);
  }
}
