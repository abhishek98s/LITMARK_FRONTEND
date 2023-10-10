import { Component, OnInit } from '@angular/core';
import { Chip, Recentbookmark } from 'src/app/Model/folder';
import { BookmarkService } from 'src/app/bookmark.service';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {
  activeChip: Chip = {
    chipName: 'Design',
    active: true
  }
  chips!: Chip[];
  recenBookmarks!: Recentbookmark[];

  constructor(private dataService: BookmarkService) {}

  ngOnInit(): void {
    this.chips = this.dataService.getChips();
    this.recenBookmarks = this.dataService.getRecentBookmark();
  }
}
