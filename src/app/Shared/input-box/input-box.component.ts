import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Output, EventEmitter } from '@angular/core';
import { recentBookmarkService } from 'src/app/services/recentbookmark.service';
import { BookmarkSearchObject } from 'src/app/Model/folder';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent {

  constructor(private searchService: SearchService, private recentBookmarkService: recentBookmarkService) { }
  @Input() searchType!: string;
  @Output() newItemEvent = new EventEmitter<string>();
  sendSerchVal(value: string) {
    this.newItemEvent.emit(value);
  }

  searchData!: string;

  inputOnChange(e: Event) {
    if (!this.searchData) {
      this.searchService.hideSearchBox();
      return
    }

    this.sendSerchVal(this.searchData)
    this.searchService.showSearchBox();

    if (this.searchType === 'recent-bookmark') {
      let result = this.recentBookmarkService.filterByTitle(this.searchData)
      this.searchService.populateSearchResult(result)
    } else if (this.searchType === 'bookmark') {
      console.log('Call bookmark service')
    }
  }
}
