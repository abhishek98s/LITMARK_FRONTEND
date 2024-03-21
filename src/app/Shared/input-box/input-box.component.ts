import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Output, EventEmitter } from '@angular/core';
import { recentBookmarkService } from 'src/app/services/recentbookmark.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { FolderService } from 'src/app/services/folder.service';
import { sidebarFolderService } from 'src/app/services/sidebarFolder.service';
import { SearchTextService } from 'src/app/services/search-text.service';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { Subject, debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs';
import { SearchObject, bookmarkSearchResponse } from 'src/app/Model/bookmark.model';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {
  private searchSignal: Subject<string> = new Subject<string>();
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(public searchService: SearchService, private folderService: FolderService, private bookmarkService: BookmarkService, private recentBookmarkService: recentBookmarkService, private dropDownService: dropDownService, private sidebarFolderService: sidebarFolderService, public searchTextService: SearchTextService) { }

  @Input() searchType!: string;
  @Input() inputId!: string;
  searchData!: string;

  @Output() newItemEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.searchTextService.getSearchText(this.inputId).subscribe((searchText) => {
      this.searchData = searchText;
    })

    this.searchSignal
      .pipe(debounceTime(100), takeUntil(this.unsubscribe))
      .subscribe(searchInput => {
        this.inputOnChange(this.searchType, searchInput)
      });
  }

  onSearchInputChange() {
    if (!this.searchData) {
      this.searchService.hideSearchBox();
      this.dropDownService.clearDropdowns();
      this.searchData = '';
      return;
    }

    this.searchSignal.next(this.searchData);
  }

  inputOnChange(searchType: string, searchInput: string) {
    switch (searchType) {
      case 'recent-bookmark':
        const result = this.recentBookmarkService.filterByTitle(searchInput);
        this.searchService.populateSearchResult(result);
        this.newItemEvent.emit(searchInput);
        this.dropDownService.openDropdown('bookmark-search-unique-string');
        break;

      case 'sidebarfolder':
        this.dropDownService.openDropdown('sidebar-folder-input-box');
        this.sidebarFolderService.populateSearchResult(searchInput);
        this.newItemEvent.emit(searchInput);
        break;

      case 'bookmark':
        this.dropDownService.openDropdown('bookmark-search-unique-string');
        this.newItemEvent.emit(searchInput);
        this.bookmarkService.searchBookmarkByTitle(searchInput, this.folderService.getParentId()).subscribe({
          next: (res: bookmarkSearchResponse) => {
            this.searchService.populateSearchResult(res.data)
          }
        })
        break;

      default:
        return;
    }

    this.searchTextService.setSearchText(searchInput, this.inputId);
  }

  clearinput() {
    this.dropDownService.clearDropdowns();
    this.searchTextService.clearSearchText();
  }
}
