import { Component, Input } from '@angular/core';
import { FolderSearchObject } from 'src/app/Model/folder';
import { dropDownService } from 'src/app/services/dropdown.service';
import { SearchTextService } from 'src/app/services/search-text.service';

@Component({
  selector: 'app-folder-search-item',
  templateUrl: './folder-search-item.component.html',
  styleUrls: ['./folder-search-item.component.scss']
})
export class FolderSearchItemComponent {
  @Input() folder!: FolderSearchObject;

  constructor(private dropDownService: dropDownService, private searchTextService: SearchTextService){}

  onFolderSearchClick(){
    this.dropDownService.clearDropdowns();
    this.searchTextService.clearSearchText()
  }
}
