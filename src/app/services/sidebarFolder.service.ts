import { Injectable, WritableSignal, signal } from '@angular/core';
import { SidebarFolder } from '../Model/folder';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class sidebarFolderService {
  private sidebarFolders: WritableSignal<SidebarFolder[]> = signal([
    {
      id: 1,
      img: 'assets/image/folder-1.png',
      name: 'Tech'
    },
    {
      id: 2,
      img: 'assets/image/folder-2.png',
      name: 'Tools'
    },
    {
      id: 3,
      img: 'assets/image/folder-3.png',
      name: 'UI Design'
    },
    {
      id: 4,
      img: 'assets/image/folder-4.png',
      name: 'Design'
    },
    {
      id: 5,
      img: 'assets/image/folder-5.png',
      name: 'UX'
    },
  ])

  private searchResult: WritableSignal<SidebarFolder[]> = signal([]);

  constructor() { }

  // Folders
  addFolder(name: string) {
    this.sidebarFolders.mutate(item => item.push({
      id: this.sidebarFolders().length + 1,
      img: 'assets/image/add-folder.png',
      name: name
    }))
  }

  getFolder() {
    return this.sidebarFolders();
  }

  deleteFolder(id: number) {
    let data = this.sidebarFolders().filter(item => item.id !== id)
    this.sidebarFolders.set(data)
  };

  populateSearchResult(searchText: string) {
    let filterData = this.sidebarFolders().filter(folder => {
      const folderTitle = folder.name.toLocaleLowerCase();
      return folderTitle.includes(searchText.toLowerCase());
    })
    this.searchResult.set(filterData)
  }

  sidebarFolderSearchResult() {
    return this.searchResult();
  }

  isSearchEmpty() {
    return (this.searchResult().length == 0) ? 1 : 0;
  }
}
