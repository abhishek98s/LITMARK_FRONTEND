import { Injectable, WritableSignal, signal } from '@angular/core';
import { FolderResponse, SidebarFolder, SidebarFolderApiBody } from '../Model/folder';
import { BehaviorSubject, forkJoin, map, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';


interface ImageResponse {
  url: string;
}
@Injectable({
  providedIn: 'root'
})


export class sidebarFolderService {
  private sidebarFolders: WritableSignal<SidebarFolder[]> = signal([])

  private searchResult: WritableSignal<SidebarFolder[]> = signal([]);

  constructor(private http: HttpClient) { }

  // Folders
  addFolder(body: SidebarFolderApiBody) {
    return this.http.post<FolderResponse>('http://localhost:5000/api/folder', body)
  }

  fetchFolder() {
    this.http.get<FolderResponse>('http://localhost:5000/api/folder').pipe(
      map((res: FolderResponse) => res.data),
    ).subscribe((Folders: SidebarFolder[]) => {
      this.sidebarFolders.set(Folders);
    });
  }

  getFolder() {
    return this.sidebarFolders;
  }

  getFolderImage(id: number) {
    return this.http.get(`http://localhost:5000/api/image/${id}`);
  }

  deleteFolder(id: number) {
    return this.http.delete<FolderResponse>(`http://localhost:5000/api/folder/${id}`)
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
