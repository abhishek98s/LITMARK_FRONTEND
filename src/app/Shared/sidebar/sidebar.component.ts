import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Folder } from 'src/app/Model/folder';
import { FolderService } from 'src/app/services/sidebarFolder.service';
import { BookmarkService } from 'src/app/services/recentbookmark.service';
import { StateService } from 'src/app/services/state.service';
import { dropDownService } from 'src/app/services/dropdown.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild(`sidebarinput`) inputSection!: ElementRef;
  @ViewChild(`inputBox`) inputElement!: ElementRef;   
  
  folders!: Folder[];
  userInputtedFodlerName: string = '';
  uniqueString = 'addfolderinput'

  constructor(public folderService: FolderService, public stateService: StateService, public dropdownService: dropDownService) {

   }

  ngOnInit(): void {
    this.folderService.foldersObservable.subscribe((value) => this.folders = value);
  }
  
  ngAfterViewInit(): void {
    this.inputElement.nativeElement.focus()
  }
  
  toggleSidebar() {
    this.stateService.state.sidebar = !this.stateService.state.sidebar;
  }

  toggleSidebarFolderInputBox(event:Event) {
    if (this.dropdownService.isOpen(this.uniqueString)) {
      this.dropdownService.closeDropdown(this.uniqueString);
    } else {
      this.dropdownService.openDropdown(this.uniqueString);
      setTimeout(() => this.inputElement.nativeElement.focus())
    }
    event.stopPropagation();
    this.userInputtedFodlerName = '';
  }

  submitSidebarFolderForm() {
    if (this.userInputtedFodlerName){
      this.folderService.addFolder(this.userInputtedFodlerName)
    }
    this.dropdownService.closeDropdown(this.uniqueString);
  }

  stopPropagation(event:Event){
    event.stopPropagation()
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropdownService.isOpen(this.uniqueString) === false) { return }
    if (this.dropdownService.isOpen(this.uniqueString) && !this.inputSection.nativeElement.contains(event.target)) {
      this.userInputtedFodlerName = '';
      this.dropdownService.clearDropdowns();
    }
  }
}
