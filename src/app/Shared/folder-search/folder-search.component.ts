import { Component, Input } from '@angular/core';
import { FolderSearchObject } from 'src/app/Model/folder';
import { dropDownService } from 'src/app/services/dropdown.service';

@Component({
  selector: 'app-folder-search',
  templateUrl: './folder-search.component.html',
  styleUrls: ['./folder-search.component.scss']
})
export class FolderSearchComponent {
  @Input() folder!: FolderSearchObject;

  constructor(private dropDownService:dropDownService){}

  onFolderSearchClick(){
    this.dropDownService.clearDropdowns();
  }
}
