import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { NestedFolderResponse } from 'src/app/model/nestedfolder.model';
import { dropDownService } from 'src/app/services/dropdown.service';
import { FolderService } from 'src/app/services/folder.service';
import { InputElementService } from 'src/app/services/input-element.service';

@Component({
  selector: 'app-folder-input-box',
  templateUrl: './folder-input-box.component.html',
  styleUrls: ['./folder-input-box.component.scss']
})
export class FolderFormComponent {
  @ViewChild('folderInputElement') folderInputElement!: ElementRef;

  @Input() parentFolderId!: number;

  public fodlerName: string = "";
  folderUniqueString = 'folder-input-box'

  constructor(private dropDownService: dropDownService, private folderService: FolderService, private InputElementService: InputElementService) { }

  @Output() folderInputEvent = new EventEmitter<ElementRef>();

  ngAfterViewInit() {
    this.folderInputEvent.emit(this.folderInputElement);
  }

  submitFolderForm() {
    if (!this.fodlerName) {
      this.dropDownService.closeDropdown(this.folderUniqueString);
      return
    }
    this.folderService.postNestedFolder({ name: this.fodlerName, folder_id: this.parentFolderId });
    this.InputElementService.clearValue(this.folderInputElement);
    this.dropDownService.clearDropdowns();
  }
}
