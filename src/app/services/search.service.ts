import { Injectable } from '@angular/core';
import { BookmarkSearchObject } from '../Model/folder';
import { dropDownService } from './dropdown.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchResultBox: Boolean = false;
  public searchResult: BookmarkSearchObject[] = [];

  constructor(private dropDownService: dropDownService) { }

  isSearchShown() {
    return this.searchResultBox;
  }

  isResult() {
    if (this.searchResult.length == 0) {
      return false;
    }
    return true;
  }

  showSearchBox() {
    this.searchResultBox = true
  }

  hideSearchBox() {
    this.searchResultBox = false
  }

  populateSearchResult(arr: BookmarkSearchObject[]) {
    this.searchResult = arr
  }

  getSearchResult() {
    return this.searchResult
  }

  isInputFocus() {
    return (this.dropDownService.isOpen('bookmark-search-unique-string') || this.dropDownService.isOpen('sidebar-folder-input-box')) ? 1 : 0;
  }
}
