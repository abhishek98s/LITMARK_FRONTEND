import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Folder } from 'src/app/Model/nestedfolder.model';
import { recentBookmarkService } from 'src/app/services/recentbookmark.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { FolderService } from 'src/app/services/folder.service';
import { InputElementService } from 'src/app/services/input-element.service';

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

  constructor(public dropDownService: dropDownService, public folderService: FolderService, private InputElementService:InputElementService) { }

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
    this.folderService.updateFolderName(id, this.renamedFolderName).subscribe({
      next: ()=>{
        this.folderService.renameNestedFolderById(id, this.renamedFolderName);
        this.dropDownService.clearDropdowns(); 
      }
    })
  }

  deleteNestedFolder(id: number) {
    this.folderService.deleteNestedFolder(id).subscribe({
      next: () => {
        this.folderService.removeNestedFolderById(id);
        this.dropDownService.clearDropdowns();
      }
    });
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
