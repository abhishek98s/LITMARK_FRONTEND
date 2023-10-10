import { Component } from '@angular/core';
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
export class TopPageComponent {
  activeChip: Chip = {
    chipName: 'Design',
    active: true
  }

  constructor(public dataService: BookmarkService) { }

  toggleSidebar(): void {
    this.dataService.sidebar = !this.dataService.sidebar;
  }
}
