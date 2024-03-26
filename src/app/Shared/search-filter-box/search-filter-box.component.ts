import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { recentBookmarkService } from 'src/app/services/recentbookmark.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { SearchService } from 'src/app/services/search.service';
import { SearchTextService } from 'src/app/services/search-text.service';

@Component({
  selector: 'app-search-filter-box',
  templateUrl: './search-filter-box.component.html',
  styleUrls: ['./search-filter-box.component.scss']
})
export class SearchFilterBoxComponent implements OnInit {
  @ViewChild('bookmarkInputFields') bookmarkInputFields!: ElementRef;
  @ViewChild('dateDropdown') dropdownElement!: ElementRef;

  @Input() searchType!: string;
  constructor(private recentBookmarkService: recentBookmarkService, public dropDownService: dropDownService, public searchService: SearchService, private searchTextService: SearchTextService) { }

  filter: string = 'Date';
  uniqueString = 'date';
  bookmarkSearchUniqueString = 'bookmark-search-unique-string';
  searchData!: string;

  ngOnInit(): void {
    this.filter = this.recentBookmarkService.getFilterType();
  }

  isInputFocus() {
    return this.searchService.isInputFocus();
  }

  setSearchData(newItem: string) {
    this.searchData = newItem;
  }

  toggleProfileMenu(event: Event) {
    this.dropDownService.toggle(this.uniqueString)
    event.stopPropagation();
  }

  sortRecentBookmarkBy(sortType: string, order: string) {
    this.recentBookmarkService.sortRecentBookmarkBy(sortType, order)
    this.filter = this.recentBookmarkService.getFilterType();
    this.dropDownService.clearDropdowns();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if ((this.dropDownService.isOpen(this.uniqueString) || this.dropDownService.isOpen(this.bookmarkSearchUniqueString)) === false) { return }
    if (this.dropDownService.isOpen(this.uniqueString) && !this.dropdownElement.nativeElement.contains(event.target)) {
      this.dropDownService.clearDropdowns();
    }
    if (this.dropDownService.isOpen(this.bookmarkSearchUniqueString) && !this.bookmarkInputFields.nativeElement.contains(event.target)) {
      this.searchTextService.clearSearchText();
      this.dropDownService.clearDropdowns();
    }
  }
}
