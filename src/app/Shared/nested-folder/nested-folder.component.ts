import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Folder } from 'src/app/Model/folder';
import { BookmarkService } from 'src/app/services/recentbookmark.service';
import { FlagService } from 'src/app/services/dropdown.service';

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

  constructor(public dataService: BookmarkService, public dropdownService: FlagService) { }

  ngOnInit(): void {
    this.uniqueString = this.nestedFolder.id.toString();
  }

  toggleMenu(event: Event) {
    if (this.dropdownService.isOpen(this.uniqueString)) {
      this.dropdownService.closeDropdown(this.uniqueString);
    } else {
      this.dropdownService.openDropdown(this.uniqueString);
    }
    event.stopPropagation();
  }

  deleteNestedFolder(id: number) {
    this.dataService.deleteNestedFolder(id);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropdownService.isOpen(this.uniqueString) === false) { return }
    if (this.dropdownService.isOpen(this.uniqueString) && !this.dropdownElement.nativeElement.contains(event.target)) {
      this.dropdownService.clearDropdowns();
    }
  }
}
