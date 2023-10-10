import { Component, OnInit } from '@angular/core';
import { folder } from 'src/app/Model/folder';
import { BookmarkService } from 'src/app/bookmark.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  folders!: folder[];

  constructor(public dataService: BookmarkService) { }

  ngOnInit(): void {
    this.folders = this.dataService.getFolders();
  }

  toggleSidebar() {
    this.dataService.sidebar = !this.dataService.sidebar;
  }
}
