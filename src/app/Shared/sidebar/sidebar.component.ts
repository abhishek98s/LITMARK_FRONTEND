import { Component, OnInit } from '@angular/core';
import { Folder } from 'src/app/Model/folder';
import { FolderService } from 'src/app/services/sidebarFolder.service';
import { BookmarkService } from 'src/app/services/recentbookmark.service';
import { StateService } from 'src/app/services/state.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  folders!: Folder[];
  userInputtedFodlerName: string = '';

  constructor(public folderService: FolderService, public stateService: StateService) { }

  ngOnInit(): void {
    this.folderService.foldersObservable.subscribe((value) => this.folders = value);
  }

  toggleSidebar() {
    this.stateService.state.sidebar = !this.stateService.state.sidebar;
  }

  toggleSidebarFolderInputBox() {
    this.stateService.state.sidebarFolderkInputbox = !this.stateService.state.sidebarFolderkInputbox;
    this.userInputtedFodlerName = '';
  }

  submitSidebarFolderForm() {
    this.folderService.addFolder(this.userInputtedFodlerName)
  }
}
