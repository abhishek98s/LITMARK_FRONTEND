import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { Folder } from 'src/app/Model/folder';
import { BookmarkService } from 'src/app/bookmark.service';
import { FlagService } from 'src/app/services/flag.service';

@Component({
  selector: 'app-sidebarfolder',
  templateUrl: './sidebarfolder.component.html',
  styleUrls: ['./sidebarfolder.component.scss']
})
export class FolderComponent {
  @ViewChild(`dropdowns`) dropdownElement!: ElementRef;

  @Input() folder!: Folder;
  menuOpen: boolean = false;

  constructor(public dataService: BookmarkService, public dropdownService:FlagService) { }

  toggleOpen(event:Event) {
    if (this.dropdownService.isOpen(this.folder.title)) {
      this.dropdownService.closeDropdown(this.folder.title);
    } else {
      this.dropdownService.openDropdown(this.folder.title);
    }
    event.stopPropagation();
  }

  deleteFolder(id: number) {
    this.dataService.deleteFolder(id)
  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropdownService.isOpen(this.folder.title) === false) { return }
    if (this.dropdownService.isOpen(this.folder.title) && !this.dropdownElement.nativeElement.contains(event.target)) {
      console.log(2)
      this.dropdownService.clearDropdowns();
    }
  }
}
