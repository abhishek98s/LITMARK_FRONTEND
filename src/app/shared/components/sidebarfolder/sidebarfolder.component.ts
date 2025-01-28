import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarFolder } from 'src/app/model/sidebarFolder.model';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { FolderService } from 'src/app/services/folder.service';
import { sidebarFolderService } from 'src/app/services/sidebarFolder.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-sidebarfolder',
  templateUrl: './sidebarfolder.component.html',
  styleUrls: ['./sidebarfolder.component.scss']
})
export class SidebarFolderComponent implements OnInit {
  @ViewChild(`dropdowns`) dropdownElement!: ElementRef;
  @ViewChild(`updateForm`) updateForm!: ElementRef;


  @Input() folder!: SidebarFolder;

  uniqueString = ''
  renamedFormString = '';

  renamedFolderName = '';

  constructor(private router: Router, public sidebarFolderService: sidebarFolderService, public dropDownService: dropDownService, private tost: ToastService, public breadcrumbService: BreadcrumbService, private folderService: FolderService) { }

  ngOnInit(): void {
    this.uniqueString = (this.folder.name + this.folder.id).toString()
    this.renamedFormString = (this.renamedFolderName + this.folder.id).toString()
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  toggleRenameForm(event: Event) {
    event.stopPropagation();
    this.dropDownService.toggle(this.renamedFormString)
    setTimeout(() => this.updateForm.nativeElement.focus())
  }

  toggleOpen(event: Event) {
    this.dropDownService.toggle(this.uniqueString)
    event.stopPropagation();
  }

  deleteFolder(id: number) {
    this.sidebarFolderService.deleteFolder(id)
    if (id === this.folderService.getParentId()) {
      this.router.navigate(['/'])
      this.breadcrumbService.removeBreadcrumbsAfter(0)
    }
  };

  renameFolder(id: number) {
    if (!this.renamedFolderName) {
      this.dropDownService.clearDropdowns()
    }

    this.sidebarFolderService.updateFolder(id, { name: this.renamedFolderName })
    this.dropDownService.clearDropdowns();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropDownService.isOpen(this.renamedFormString) && !this.updateForm.nativeElement.contains(event.target)) {
      this.dropDownService.clearDropdowns();
    }
    if (this.dropDownService.isOpen(this.uniqueString) === false) { return }
    if (this.dropDownService.isOpen(this.uniqueString) && !this.dropdownElement.nativeElement.contains(event.target)) {
      this.dropDownService.clearDropdowns();
    }
  }
}
