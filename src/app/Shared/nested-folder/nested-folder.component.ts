import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Folder } from 'src/app/Model/folder';
import { recentBookmarkService } from 'src/app/services/recentbookmark.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { FolderService } from 'src/app/services/folder.service';

@Component({
  selector: 'nested-folder',
  templateUrl: './nested-folder.component.html',
  styleUrls: ['./nested-folder.component.scss']
})
export class NestedFolderComponent implements OnInit {
  @ViewChild(`nestedFolderDropdown`) dropdownElement!: ElementRef;

  @Input() nestedFolder!: Folder;
  menuOpen: boolean = false;

  uniqueString = '';

  constructor(public dropDownService: dropDownService, public folderService: FolderService) { }

  ngOnInit(): void {
    this.uniqueString = this.nestedFolder.id.toString() + this.nestedFolder.title;
  }

  toggleMenu(event: Event) {
    this.dropDownService.toggle(this.uniqueString);
    event.stopPropagation();
  }

  deleteNestedFolder(id: number) {
    this.folderService.deleteNestedFolder(id);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropDownService.isOpen(this.uniqueString) === false) { return }
    if (this.dropDownService.isOpen(this.uniqueString) && !this.dropdownElement.nativeElement.contains(event.target)) {
      this.dropDownService.clearDropdowns();
    }
  }
}
