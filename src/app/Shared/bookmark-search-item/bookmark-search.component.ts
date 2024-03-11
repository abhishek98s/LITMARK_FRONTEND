import { Component, Input } from '@angular/core';
import { BookmarkSearchObject } from 'src/app/Model/bookmark.model';
import { dropDownService } from 'src/app/services/dropdown.service';
import { SearchTextService } from 'src/app/services/search-text.service';

@Component({
  selector: 'app-bookmark-search-item',
  templateUrl: './bookmark-search-item.component.html',
  styleUrls: ['./bookmark-search-item.component.scss']
})
export class BookmarkSearchItemComponent {
  @Input() bookmarkResult! :BookmarkSearchObject;

  constructor(private dropDownService: dropDownService, private searchTextService: SearchTextService){}

  onBookmarkSearchItem(){
    this.dropDownService.clearDropdowns();  
    this.searchTextService.clearSearchText()
  }
}
