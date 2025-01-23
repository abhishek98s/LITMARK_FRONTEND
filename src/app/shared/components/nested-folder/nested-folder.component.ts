import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Folder } from 'src/app/model/nestedfolder.model';
import { recentBookmarkService } from 'src/app/services/recentbookmark.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { FolderService } from 'src/app/services/folder.service';
import { InputElementService } from 'src/app/services/input-element.service';
import { BreadCrumb } from 'src/app/model/breadcrums.model';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { BookmarkService } from 'src/app/services/bookmark.service';

@Component({
  selector: 'nested-folder',
  templateUrl: './nested-folder.component.html',
  styleUrls: ['./nested-folder.component.scss']
})
export class NestedFolderComponent implements OnInit {
  @ViewChild(`nestedFolderDropdown`) dropdownElement!: ElementRef;
  @ViewChild(`nestedFolderUpdateForm`) nestedFolderUpdateForm!: ElementRef;

  @Input() nestedFolder!: Folder;
  menuOpen: boolean = false;

  uniqueString = '';
  renamedFolderString = '';
  renamedFolderName = ''

  constructor(public dropDownService: dropDownService, public folderService: FolderService, private InputElementService: InputElementService, public breadcrumbService: BreadcrumbService, private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.uniqueString = this.nestedFolder.id.toString() + this.nestedFolder.name;
    this.renamedFolderString = `nestedFolder-input-box-string ${this.nestedFolder.id}`;
  }

  toggleMenu(event: Event) {
    this.dropDownService.toggle(this.uniqueString);
    event.stopPropagation();
  }

  toggleNestedFolderInput(event: Event) {
    event.stopPropagation();
    this.dropDownService.toggle(this.renamedFolderString);
    setTimeout(() => this.nestedFolderUpdateForm.nativeElement.focus())
    this.renamedFolderName = ''
  }

  renameNestedFolder(id: number) {
    this.folderService.updateFolderName(id, this.renamedFolderName)
    this.dropDownService.clearDropdowns();
  }

  deleteNestedFolder(id: number) {
    this.folderService.deleteNestedFolder(id);
    this.dropDownService.clearDropdowns();
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const bookmarkId = parseInt(event.dataTransfer?.getData('bookmark_id')!);
    this.bookmarkService.moveBookmark(bookmarkId, this.nestedFolder.id);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropDownService.isOpen(this.renamedFolderString) && !this.nestedFolderUpdateForm.nativeElement.contains(event.target)) {
      this.dropDownService.clearDropdowns();
      this.renamedFolderName = ''
    }
    if (this.dropDownService.isOpen(this.uniqueString) === false) { return }
    if (this.dropDownService.isOpen(this.uniqueString) && !this.dropdownElement.nativeElement.contains(event.target)) {
      this.dropDownService.clearDropdowns();
    }
  }
}
