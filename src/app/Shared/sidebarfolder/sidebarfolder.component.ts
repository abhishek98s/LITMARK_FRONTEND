import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { SidebarFolder } from 'src/app/Model/sidebarFolder.model';
import { dropDownService } from 'src/app/services/dropdown.service';
import { sidebarFolderService } from 'src/app/services/sidebarFolder.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-sidebarfolder',
  templateUrl: './sidebarfolder.component.html',
  styleUrls: ['./sidebarfolder.component.scss']
})
export class FolderComponent implements OnInit {
  @ViewChild(`dropdowns`) dropdownElement!: ElementRef;
  @ViewChild(`updateForm`) updateForm!: ElementRef;


  @Input() folder!: SidebarFolder;

  uniqueString = ''
  renamedFormString = '';

  renamedFolderName = '';

  constructor(public sidebarFolderService: sidebarFolderService, public dropDownService: dropDownService, private tost: ToastService) { }

  ngOnInit(): void {
    this.uniqueString = (this.folder.name + this.folder.id).toString()
    this.renamedFormString = (this.renamedFolderName + this.folder.id).toString()
    this.sidebarFolderService.getFolderImage(this.folder.image_id!).subscribe((image: any) => this.folder.img = image.data.url)
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
    this.sidebarFolderService.deleteFolder(id).subscribe({
      next: () => {
        this.sidebarFolderService.removeFolder(id)
        this.tost.success('Folder deleted sucessfully.')
      },
      error: (error) => {
        const err = error.error.msg;
        if (!err) {
          this.tost.error("Check connection.");
          return
        }
        this.tost.error(err)
      }
    })
  };

  renameFolder(id: number) {
    if (!this.renamedFolderName) {
      this.dropDownService.clearDropdowns()
    }

    this.sidebarFolderService.updateFolder(id, { name: this.renamedFolderName }).subscribe({
      next: () => {
        this.sidebarFolderService.renameFolder(id, this.renamedFolderName)
        this.tost.success('Rename folder sucessfully.')
      },
      error: (error) => {
        const err = error.error.msg;
        if (!err) {
          this.tost.error("Check connection.");
          return
        }
        this.tost.error(err)
      }
    })
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
