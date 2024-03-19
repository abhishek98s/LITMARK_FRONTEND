import { Component, Input, OnInit } from '@angular/core';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { FolderService } from 'src/app/services/folder.service';

@Component({
  selector: 'app-empty-bookmark',
  templateUrl: './empty-bookmark.component.html',
  styleUrl: './empty-bookmark.component.scss'
})
export class EmptyBookmarkComponent implements OnInit {
  @Input() folderString!: string;
  @Input() bookmarkString!: string;

  constructor(public bookmarkService: BookmarkService, public folderService: FolderService, public dropDownService: dropDownService) { }

  ngOnInit(): void {
    this.isEmpty();
    console.log(this.folderString, this.bookmarkString)
  }

  isEmpty() {
    let bookmark = this.bookmarkService.getBookmark().length;
    let folder = this.folderService.getNestedFolder().length;

    return (bookmark == 0 && folder == 0) ? true : false;
  }

  isInputsOpen(){
    return (this.dropDownService.isOpen(this.folderString) && this.dropDownService.isOpen(this.bookmarkString)) ? true : false
  }
}
