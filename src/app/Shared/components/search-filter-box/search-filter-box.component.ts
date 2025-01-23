import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { recentBookmarkService } from 'src/app/services/recentbookmark.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { SearchService } from 'src/app/services/search.service';
import { SearchTextService } from 'src/app/services/search-text.service';
import { FolderService } from 'src/app/services/folder.service';
import { BookmarkService } from 'src/app/services/bookmark.service';

@Component({
  selector: 'app-search-filter-box',
  templateUrl: './search-filter-box.component.html',
  styleUrls: ['./search-filter-box.component.scss']
})
export class SearchFilterBoxComponent implements OnInit {
  @ViewChild('bookmarkInputFields') bookmarkInputFields!: ElementRef;
  @ViewChild('dateDropdown') dropdownElement!: ElementRef;

  @Input() searchType!: string;
  constructor(private recentBookmarkService: recentBookmarkService, public dropDownService: dropDownService, public searchService: SearchService, private searchTextService: SearchTextService, private folderService: FolderService, private bookmarkService: BookmarkService) { }

  uniqueString = 'date';
  bookmarkSearchUniqueString = 'bookmark-search-unique-string';
  searchData!: string;

  ngOnInit(): void {
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

  sortBy(sortBy: string, sortType: string, order: string) {
    switch (this.searchType) {
      case 'bookmark':
        this.folderService.sortNestedFolderBy(sortType, order);
        this.bookmarkService.sortBookmarksBy(sortType, order);
        this.dropDownService.setFilterType(sortBy);
        this.dropDownService.clearDropdowns();
        break;
      case 'recent-bookmark':
        this.recentBookmarkService.sortRecentBookmarkBy(sortType, order)
        this.dropDownService.setFilterType(sortBy);

        this.dropDownService.clearDropdowns();
        break;
      default:
        break;
    }
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
