import { Component, OnInit } from '@angular/core';
import { Folder } from 'src/app/Model/folder';
import { BookmarkService } from 'src/app/bookmark.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  folders!: Folder[];
  userInputtedFodlerName: string = '';

  constructor(public dataService: BookmarkService) { }

  ngOnInit(): void {
    this.dataService.foldersObservable.subscribe((value) => this.folders = value);
  }

  toggleSidebar() {
    this.dataService.state.sidebar = !this.dataService.state.sidebar;
  }

  toggleSidebarFolderInputBox() {
    this.dataService.state.sidebarFolderkInputbox = !this.dataService.state.sidebarFolderkInputbox;
    this.userInputtedFodlerName = '';
  }

  submitSidebarFolderForm() {
    this.dataService.addFolder(this.userInputtedFodlerName)
  }
}
