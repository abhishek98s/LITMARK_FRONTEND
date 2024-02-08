import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Folder } from 'src/app/Model/folder';
import { dropDownService } from 'src/app/services/dropdown.service';
import { FolderService } from 'src/app/services/sidebarFolder.service';

@Component({
  selector: 'app-sidebarfolder',
  templateUrl: './sidebarfolder.component.html',
  styleUrls: ['./sidebarfolder.component.scss']
})
export class FolderComponent implements OnInit{
  @ViewChild(`dropdowns`) dropdownElement!: ElementRef;

  @Input() folder!: Folder;
  menuOpen: boolean = false;

  uniqueString = ''

  constructor(public folderService: FolderService, public dropdownService:dropDownService) { }

  ngOnInit(): void {
    this.uniqueString = (this.folder.title + this.folder.id).toString()
  }

  toggleOpen(event:Event) {
    if (this.dropdownService.isOpen(this.uniqueString)) {
      this.dropdownService.closeDropdown(this.uniqueString);
    } else {
      this.dropdownService.openDropdown(this.uniqueString);
    }
    event.stopPropagation();
  }

  deleteFolder(id: number) {
    this.folderService.deleteFolder(id)
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropdownService.isOpen(this.uniqueString) === false) { return }
    if (this.dropdownService.isOpen(this.uniqueString) && !this.dropdownElement.nativeElement.contains(event.target)) {
      this.dropdownService.clearDropdowns();
    }
  }
}
