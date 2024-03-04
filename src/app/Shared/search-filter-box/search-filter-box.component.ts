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
  constructor(private dataService: recentBookmarkService, public dropDownService: dropDownService, public searchService: SearchService, private searchTextService: SearchTextService) { }

  filter: string = 'Date';
  uniqueString = 'date';
  bookmarkSearchUniqueString = 'bookmark-search-unique-string';
  searchData!: string;

  ngOnInit(): void {
    this.filter = this.dataService.getFilterType();
  }

  isInputFocus(){
    return this.searchService.isInputFocus();
  }

  setSearchData(newItem: string) {
    this.searchData = newItem;
  }

  toggleProfileMenu(event: Event) {
    if (this.dropDownService.isOpen(this.uniqueString)) {
      this.dropDownService.closeDropdown(this.uniqueString);
    } else {
      this.dropDownService.openDropdown(this.uniqueString);
    }
    event.stopPropagation();
  }

  sortRecentBookmarkBy(filterType: string) {
    this.dataService.sortRecentBookmarkBy(filterType)
    this.filter = this.dataService.getFilterType();
    this.dropDownService.closeDropdown(this.uniqueString);
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
