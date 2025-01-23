import { Component, Input } from '@angular/core';
import { SearchObject } from 'src/app/model/bookmark.model';
import { dropDownService } from 'src/app/services/dropdown.service';
import { SearchTextService } from 'src/app/services/search-text.service';

@Component({
  selector: 'app-bookmark-search-item',
  templateUrl: './bookmark-search-item.component.html',
  styleUrls: ['./bookmark-search-item.component.scss']
})
export class BookmarkSearchItemComponent {
  @Input() bookmarkResult! :SearchObject;

  constructor(private dropDownService: dropDownService, private searchTextService: SearchTextService){}

  onBookmarkSearchItem(){
    this.dropDownService.clearDropdowns();  
    this.searchTextService.clearSearchText()
  }
}
