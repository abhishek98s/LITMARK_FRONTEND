import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Output, EventEmitter } from '@angular/core';
import { recentBookmarkService } from 'src/app/services/recentbookmark.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { FolderService } from 'src/app/services/folder.service';
import { sidebarFolderService } from 'src/app/services/sidebarFolder.service';
import { FolderSsearchService } from 'src/app/services/folder-ssearch.service';
import { SearchTextService } from 'src/app/services/search-text.service';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {

  constructor(private searchService: SearchService, private recentBookmarkService: recentBookmarkService, private dropDownService: dropDownService, private folderSsearchService: FolderSsearchService, private searchTextService: SearchTextService) { }


  @Input() searchType!: string;
  @Input() inputId!: string;
  searchData!: string;

  ngOnInit(): void {
    this.searchTextService.getSearchText(this.inputId).subscribe((searchText) => {
      this.searchData = searchText;
    })
  }

  @Output() newItemEvent = new EventEmitter<string>();
  sendSerchVal(value: string) {
    if (this.searchType === 'recent-bookmark') {
      this.newItemEvent.emit(value);
    }
  }


  inputOnChange(e: Event) {
    if (!this.searchData) {
      this.searchService.hideSearchBox();
      this.dropDownService.clearDropdowns();
      this.searchData = ''
      return
    }

    if (this.searchType === 'recent-bookmark') {
      let result = this.recentBookmarkService.filterByTitle(this.searchData)
      this.searchService.populateSearchResult(result)
      this.sendSerchVal(this.searchData)
      this.dropDownService.openDropdown('bookmark-search-unique-string');
    }
    else if (this.searchType === 'folder') {
      this.dropDownService.openDropdown('sidebar-folder-input-box');
      let result = this.folderSsearchService.filterByTitle(this.searchData);
      this.folderSsearchService.populateSearchResult(result)
    }
    else if (this.searchType === 'bookmark') {
      console.log('Call bookmark service')
      return
    }
    else {
      return
    }

    this.searchTextService.setSearchText(this.searchData, this.inputId)
  }
}
