import { Component, ElementRef, HostListener, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { FolderService } from 'src/app/services/folder.service';
import { recentBookmarkService } from 'src/app/services/recentbookmark.service';
import { FolderFormComponent } from '../folder-input-box/folder-input-box.component';
import { InputElementService } from 'src/app/services/input-element.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-bookmark-folder',
  templateUrl: './bookmark-folder.component.html',
  styleUrls: ['./bookmark-folder.component.scss']
})
export class BookmarkFolderComponent implements OnInit {
  @ViewChild('folderInputBox') folderInputBox!: ElementRef;
  folderInputElement!: ElementRef

  @ViewChild('bookmarkInputBox') bookmarkInputBox!: ElementRef;
  bookmarkInputElement!: ElementRef;

  routeId!: number;

  searchType = "bookmark";

  folderUniqueString = 'folder-input-box'
  bookmarkUniqueString = 'bookmark-input-box'

  constructor(private route: ActivatedRoute, public dataService: recentBookmarkService, public bookmarkService: BookmarkService, public folderService: FolderService, public dropDownService: dropDownService, private InputElementService: InputElementService) {
    this.dropDownService.clearDropdowns()
  };

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.routeId = parseInt(params.get('id')!);
      this.folderService.setParentId(this.routeId)
      this.folderService.fetchFolder(this.routeId)
      this.bookmarkService.fetchBookmark(this.routeId)
    })
  }

  onFolderInputEvent(element: ElementRef) {
    this.folderInputElement = element;
  }

  onBookmarkInputEvent(element: ElementRef) {
    this.bookmarkInputElement = element;
  }

  stopPropagation(event: Event) {
    event.stopPropagation()
  }

  toggleFolderInputBox(event: Event) {
    event.stopPropagation();
    if (!this.dropDownService.isOpen(this.folderUniqueString)) {
      this.InputElementService.onFocus(this.folderInputElement)
    }
    this.dropDownService.toggle(this.folderUniqueString);
    this.InputElementService.clearValue(this.folderInputElement)
  }

  toggleBookmarkInputBox(event: Event) {
    event.stopPropagation();
    if (!this.dropDownService.isOpen(this.bookmarkUniqueString)) {
      this.InputElementService.onFocus(this.bookmarkInputElement)
    }
    this.dropDownService.toggle(this.bookmarkUniqueString)
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropDownService.isOpen(this.folderUniqueString) && !this.folderInputBox.nativeElement.contains(event.target)) {
      this.InputElementService.clearValue(this.folderInputElement)
      this.dropDownService.clearDropdowns();
    }

    if (this.dropDownService.isOpen(this.bookmarkUniqueString) && !this.folderInputBox.nativeElement.contains(event.target)) {
      this.InputElementService.clearValue(this.bookmarkInputElement)
      this.dropDownService.clearDropdowns();
    }
  }
}
