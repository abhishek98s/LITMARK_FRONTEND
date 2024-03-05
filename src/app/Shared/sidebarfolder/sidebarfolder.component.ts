import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Folder, FolderResponse, SidebarFolder } from 'src/app/Model/folder';
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
  isUpdateFormOpen: boolean = false;

  uniqueString = ''

  renamedFolderName = '';

  constructor(public sidebarFolderService: sidebarFolderService, public dropDownService: dropDownService, private tost: ToastService) { }

  ngOnInit(): void {
    this.uniqueString = (this.folder.name + this.folder.id).toString()
    this.sidebarFolderService.getFolderImage(this.folder.image_id!).subscribe((image: any) => this.folder.img = image.data.url)
  }

  toggleRenameForm(event: Event) {
    event.stopPropagation();
    this.isUpdateFormOpen = true;
    this.dropDownService.toggle(this.uniqueString)
    setTimeout(() => this.updateForm.nativeElement.focus())
  }

  toggleOpen(event: Event) {
    this.dropDownService.toggle(this.uniqueString)
    event.stopPropagation();
  }

  deleteFolder(id: number) {
    this.sidebarFolderService.deleteFolder(id).subscribe(
      (res: FolderResponse) => {
        this.sidebarFolderService.fetchFolder()
        this.tost.success('Folder deleted sucessfully.')
      },
      (err) => {
        const error = err.error.error;
        if (!error) {
          this.tost.error("Check connection.");
          return
        }
        this.tost.error(err.error.error)
      }
    );
  }

  renameFolder(id: number) {
    if (!this.renamedFolderName) {
      this.isUpdateFormOpen = false
    }

    this.sidebarFolderService.updateFolder(id, { name: this.renamedFolderName }).subscribe(
      (res: FolderResponse) => {
        this.sidebarFolderService.fetchFolder()
        this.tost.success('Rename folder sucessfully.')
      },
      (err) => {
        const error = err.error.error;
        if (!error) {
          this.tost.error("Check connection.");
          return
        }
        this.tost.error(err.error.error)
      }
    )
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.isUpdateFormOpen && !this.updateForm.nativeElement.contains(event.target)) {
      this.isUpdateFormOpen = false
      console.log(2)
    }
    if (this.dropDownService.isOpen(this.uniqueString) === false) { return }
    if (this.dropDownService.isOpen(this.uniqueString) && !this.dropdownElement.nativeElement.contains(event.target)) {
      this.dropDownService.clearDropdowns();
    }

  }
}
