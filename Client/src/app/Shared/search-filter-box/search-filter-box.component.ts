import { Component } from '@angular/core';
import { BookmarkService } from 'src/app/bookmark.service';

@Component({
  selector: 'app-search-filter-box',
  templateUrl: './search-filter-box.component.html',
  styleUrls: ['./search-filter-box.component.scss']
})
export class SearchFilterBoxComponent {
  filter: string = 'Date';

  constructor(private dataService: BookmarkService) { }

  filterRecentBookmarkBy(filterType: string) {
    this.dataService.filterRecentBookmarkBy(filterType)
  }
}
