import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Folder, SidebarFolder } from 'src/app/Model/folder';
import { dropDownService } from 'src/app/services/dropdown.service';
import { sidebarFolderService } from 'src/app/services/sidebarFolder.service';

@Component({
  selector: 'app-sidebarfolder',
  templateUrl: './sidebarfolder.component.html',
  styleUrls: ['./sidebarfolder.component.scss']
})
export class FolderComponent implements OnInit {
  @ViewChild(`dropdowns`) dropdownElement!: ElementRef;

  @Input() folder!: SidebarFolder;
  menuOpen: boolean = false;

  uniqueString = ''

  constructor(public sidebarFolderService: sidebarFolderService, public dropDownService: dropDownService) { }

  ngOnInit(): void {
    this.uniqueString = (this.folder.name + this.folder.id).toString()
  }

  toggleOpen(event: Event) {
    this.dropDownService.toggle(this.uniqueString)
    event.stopPropagation();
  }

  deleteFolder(id: number) {
    this.sidebarFolderService.deleteFolder(id)
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropDownService.isOpen(this.uniqueString) === false) { return }
    if (this.dropDownService.isOpen(this.uniqueString) && !this.dropdownElement.nativeElement.contains(event.target)) {
      this.dropDownService.clearDropdowns();
    }
  }
}
