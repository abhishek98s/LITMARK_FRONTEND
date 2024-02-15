import { Injectable } from '@angular/core';
import { Folder, FolderSearchObject } from '../Model/folder';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class sidebarFolderService {
  private folders: Folder[] = [
    {
      id: 1,
      img: 'assets/image/folder-1.png',
      title: 'Tech'
    },
    {
      id: 2,
      img: 'assets/image/folder-2.png',
      title: 'Tools'
    },
    {
      id: 3,
      img: 'assets/image/folder-3.png',
      title: 'UI Design'
    },
    {
      id: 4,
      img: 'assets/image/folder-4.png',
      title: 'Design'
    },
    {
      id: 5,
      img: 'assets/image/folder-5.png',
      title: 'UX'
    },
  ]

  foldersObservable = new BehaviorSubject<Folder[]>(this.folders);

  constructor() { }

  // Folders
  addFolder(name: string) {
    this.folders.push({
      id: this.folders.length + 1,
      img: 'assets/image/add-folder.png',
      title: name
    },)
  }

  getFolder() {
    return this.folders
  }

  deleteFolder(id: number) {
    this.foldersObservable.pipe(
      map((folders: Folder[]) => folders.filter(item => item.id !== id)),
      tap((filteredBookmarks: Folder[]) => {
        this.folders = filteredBookmarks;
        this.foldersObservable.next(filteredBookmarks);
      })
    ).subscribe();
  }
}
