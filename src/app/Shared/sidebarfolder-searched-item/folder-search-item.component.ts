import { Component, Input } from '@angular/core';
import {  SidebarFolder } from 'src/app/Model/folder';
import { dropDownService } from 'src/app/services/dropdown.service';
import { SearchTextService } from 'src/app/services/search-text.service';

@Component({
  selector: 'app-sidebarfolder-searched-item',
  templateUrl: './sidebarfolder-searched-item.component.html',
  styleUrls: ['./sidebarfolder-searched-item.component.scss']
})
export class FolderSearchItemComponent {
  @Input() folder!: SidebarFolder;

  constructor(private dropDownService: dropDownService, private searchTextService: SearchTextService){}

  onFolderSearchClick(){
    this.dropDownService.clearDropdowns();
    this.searchTextService.clearSearchText()
  }
}
