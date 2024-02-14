import { Injectable } from '@angular/core';
import { BookmarkSearchObject } from '../Model/folder';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchResultBox: Boolean = false;
  public searchResult: BookmarkSearchObject[] = [{type: 'bookmark', title: 'sd', link: 'sd'}];

  constructor() { }

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
}
