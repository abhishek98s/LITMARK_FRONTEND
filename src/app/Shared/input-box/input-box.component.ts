import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Output, EventEmitter } from '@angular/core';
import { recentBookmarkService } from 'src/app/services/recentbookmark.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { FolderService } from 'src/app/services/folder.service';
import { sidebarFolderService } from 'src/app/services/sidebarFolder.service';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent {

  constructor(private searchService: SearchService, private recentBookmarkService: recentBookmarkService, private dropDownService: dropDownService, private sidebarFolderService: sidebarFolderService) { }
  @Input() searchType!: string;
  @Output() newItemEvent = new EventEmitter<string>();
  sendSerchVal(value: string) {
    if (this.searchType === 'recent-bookmark') {
      this.newItemEvent.emit(value);
    }
  }

  searchData!: string;

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
      this.searchService.showSearchBox();
    }
    else if (this.searchType === 'folder') {
      this.dropDownService.openDropdown('sidebar-folder-input-box');
      let result = this.sidebarFolderService.filterByTitle(this.searchData);
      this.sidebarFolderService.populateSearchResult(result)
    }
    else if (this.searchType === 'bookmark') {
      console.log('Call bookmark service')
      return
    }
    else {
      return
    }

  }
}
