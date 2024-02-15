import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Folder } from 'src/app/Model/folder';
import { sidebarFolderService } from 'src/app/services/sidebarFolder.service';
import { StateService } from 'src/app/services/state.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { FolderSsearchService } from 'src/app/services/folder-ssearch.service';
import { SearchTextService } from 'src/app/services/search-text.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @ViewChild(`sidebarFodlerSearch`) sidebarFodlerSearch!: ElementRef;
  @ViewChild(`sidebarinput`) inputSection!: ElementRef;
  @ViewChild(`inputBox`) inputElement!: ElementRef;

  folders!: Folder[];
  userInputtedFodlerName: string = '';
  searchData!: string;

  uniqueString = 'addfolderinput'
  inputUniqueString = 'sidebar-folder-input-box'

  constructor(public stateService: StateService, public dropdownService: dropDownService, public sidebarFolderService: sidebarFolderService, public folderSearchService: FolderSsearchService, private searchTextService: SearchTextService) { }

  ngOnInit(): void {
    this.sidebarFolderService.foldersObservable.subscribe((value) => this.folders = value);
  }

  setSearchData(newItem: string) {
    this.searchData = newItem;
  }

  toggleSidebar() {
    this.stateService.state.sidebar = !this.stateService.state.sidebar;
  }

  toggleSidebarFolderInputBox(event: Event) {
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
    if (this.userInputtedFodlerName) {
      this.sidebarFolderService.addFolder(this.userInputtedFodlerName)
    }
    this.dropdownService.closeDropdown(this.uniqueString);
  }

  stopPropagation(event: Event) {
    event.stopPropagation()
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if ((this.dropdownService.isOpen(this.uniqueString) || this.dropdownService.isOpen(this.inputUniqueString)) === false) { return }
    if (this.dropdownService.isOpen(this.inputUniqueString) && !this.sidebarFodlerSearch.nativeElement.contains(event.target)) {
      this.searchTextService.clearSearchText();
      this.dropdownService.closeDropdown(this.inputUniqueString)
    }

    if (this.dropdownService.isOpen(this.uniqueString) && !this.inputSection.nativeElement.contains(event.target)) {
      this.userInputtedFodlerName = '';
      this.dropdownService.clearDropdowns();
    }
  }
}
