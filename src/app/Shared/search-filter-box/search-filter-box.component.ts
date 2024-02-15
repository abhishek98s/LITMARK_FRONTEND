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
  constructor(private dataService: recentBookmarkService, public dropdownService: dropDownService, public searchService: SearchService, private searchTextService: SearchTextService) { }

  filter: string = 'Date';
  uniqueString = 'date';
  bookmarkSearchUniqueString = 'bookmark-search-unique-string';
  searchData!: string;

  ngOnInit(): void {
    this.filter = this.dataService.getFilterType();
  }

  setSearchData(newItem: string) {
    this.searchData = newItem;
  }

  toggleProfileMenu(event: Event) {
    if (this.dropdownService.isOpen(this.uniqueString)) {
      this.dropdownService.closeDropdown(this.uniqueString);
    } else {
      this.dropdownService.openDropdown(this.uniqueString);
    }
    event.stopPropagation();
  }

  sortRecentBookmarkBy(filterType: string) {
    this.dataService.sortRecentBookmarkBy(filterType)
    this.filter = this.dataService.getFilterType();
    this.dropdownService.closeDropdown(this.uniqueString);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if ((this.dropdownService.isOpen(this.uniqueString) || this.dropdownService.isOpen(this.bookmarkSearchUniqueString)) === false) { return }
    if (this.dropdownService.isOpen(this.uniqueString) && !this.dropdownElement.nativeElement.contains(event.target)) {
      this.dropdownService.clearDropdowns();
    }
    if (this.dropdownService.isOpen(this.bookmarkSearchUniqueString) && !this.bookmarkInputFields.nativeElement.contains(event.target)) {
      this.searchTextService.clearSearchText();
      this.dropdownService.clearDropdowns();
    }
  }
}
