import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Signal, ViewChild, WritableSignal, signal } from '@angular/core';
import { SidebarFolder } from 'src/app/Model/folder';
import { sidebarFolderService } from 'src/app/services/sidebarFolder.service';
import { StateService } from 'src/app/services/state.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { SearchTextService } from 'src/app/services/search-text.service';
import { ToastService } from 'src/app/services/toast.service';

interface FolderResponse {
  data: SidebarFolder[];
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @ViewChild(`sidebarFodlerSearch`) sidebarFodlerSearch!: ElementRef;
  @ViewChild(`sidebarinput`) inputSection!: ElementRef;
  @ViewChild(`inputBox`) inputElement!: ElementRef;

  private folders: WritableSignal<SidebarFolder[]> = signal([])
  userInputtedFodlerName: string = '';
  searchData!: string;

  uniqueString = 'addfolderinput'
  inputUniqueString = 'sidebar-folder-input-box'

  constructor(public stateService: StateService, public dropDownService: dropDownService, public sidebarFolderService: sidebarFolderService, private searchTextService: SearchTextService, private tost: ToastService) { }

  ngOnInit(): void {
    this.sidebarFolderService.fetchFolder();
    this.folders = this.sidebarFolderService.getFolder();
  }

  isFoldersEmpty() {
    return (!this.folders().length) ? 1 : 0;
  }

  getFolders() {
    return this.folders();
  }

  setSearchData(newItem: string) {
    this.searchData = newItem;
  }

  toggleSidebar() {
    this.stateService.state.sidebar = !this.stateService.state.sidebar;
  }

  toggleSidebarFolderInputBox(event: Event) {
    if (!this.dropDownService.isOpen(this.uniqueString)) {
      setTimeout(() => this.inputElement.nativeElement.focus())
    }
    this.dropDownService.toggle(this.uniqueString)

    event.stopPropagation();
    this.userInputtedFodlerName = '';
  }

  submitSidebarFolderForm() {
    if (this.userInputtedFodlerName) {
      this.sidebarFolderService.addFolder({ name: this.userInputtedFodlerName, image_id: 1, folder_id: 1 }).subscribe(
        (res: FolderResponse) => {
          this.sidebarFolderService.fetchFolder()
          this.tost.success('Folder added sucessfully.')
        },
        (error) => {
          const err = error.error.msg;
          if (!err) {
            this.tost.error("Check connection.");
            return
          }
          this.tost.error(err)
        }
      )
    }
    this.dropDownService.closeDropdown(this.uniqueString);
  }

  stopPropagation(event: Event) {
    event.stopPropagation()
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if ((this.dropDownService.isOpen(this.uniqueString) || this.dropDownService.isOpen(this.inputUniqueString)) === false) { return }
    if (this.dropDownService.isOpen(this.inputUniqueString) && !this.sidebarFodlerSearch.nativeElement.contains(event.target)) {
      this.searchTextService.clearSearchText();
      this.dropDownService.closeDropdown(this.inputUniqueString)
    }

    if (this.dropDownService.isOpen(this.uniqueString) && !this.inputSection.nativeElement.contains(event.target)) {
      this.userInputtedFodlerName = '';
      this.dropDownService.clearDropdowns();
    }
  }
}
