import { Injectable, OnInit } from '@angular/core';
import { Folder, FolderSearchObject } from '../Model/folder';
import { sidebarFolderService } from './sidebarFolder.service';

@Injectable({
  providedIn: 'root'
})
export class FolderSsearchService implements OnInit {
  private folderSearchResult: FolderSearchObject[] = [];

  folders!: Folder[];

  constructor(private sidebarFolderService: sidebarFolderService) { }

  ngOnInit(): void {
    this.sidebarFolderService.foldersObservable.subscribe((value) => this.folders = value);
  }

  filterByTitle(searchText: string) {
    const filterData = this.sidebarFolderService.getFolder().filter((item) => {
      const folderTitle = item.title.toLocaleLowerCase();
      return folderTitle.includes(searchText.toLowerCase());
    }).map((filterItem) => {
      const { id, title } = filterItem;
      return { title, id }
    })

    return filterData;
  }

  getSearchResult() {
    return this.folderSearchResult;
  }

  populateSearchResult(arr: FolderSearchObject[]) {
    this.folderSearchResult = arr
  }

  isSearchEmpty() {
    return this.folderSearchResult.length === 0 ? true : false
  }
}
