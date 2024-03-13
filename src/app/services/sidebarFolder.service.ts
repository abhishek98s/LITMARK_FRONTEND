import { Injectable, WritableSignal, signal } from '@angular/core';
import { SidebarFolder, SidebarFolderApiBody, SidebarFolderArrayResponse, SidebarFolderResponse } from '../Model/sidebarFolder.model';
import { BehaviorSubject, forkJoin, map, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';


interface UpdateFolderBody {
  name: string;
}
@Injectable({
  providedIn: 'root'
})


export class sidebarFolderService {
  private sidebarFolders: WritableSignal<SidebarFolder[]> = signal([])

  private searchResult: WritableSignal<SidebarFolder[]> = signal([]);

  constructor(private http: HttpClient) { }

  // Folders

  fetchFolder() {
    this.http.get<SidebarFolderArrayResponse>('http://localhost:5000/api/folder').pipe(
      map((res: SidebarFolderArrayResponse) => res.data),
    ).subscribe((Folders: SidebarFolder[]) => {
      this.sidebarFolders.set(Folders);
    });
  }

  getFolder() {
    return this.sidebarFolders;
  }

  postSidebarFolder(body: SidebarFolderApiBody) {
    return this.http.post<SidebarFolderResponse>('http://localhost:5000/api/folder', body)
  }

  addSidebarFolder(sidebarFolder: SidebarFolder) {
    this.sidebarFolders().push(sidebarFolder);
  }

  getFolderImage(id: number) {
    return this.http.get(`http://localhost:5000/api/image/${id}`);
  }

  deleteFolder(id: number) {
    return this.http.delete<SidebarFolderArrayResponse>(`http://localhost:5000/api/folder/${id}`)
  }

  removeFolder(id: number) {
    let removedData = this.sidebarFolders().filter((sidebarFolder: SidebarFolder) => sidebarFolder.id !== id)
    this.sidebarFolders.set(removedData)
  }

  updateFolder(id: number, option: UpdateFolderBody) {
    return this.http.patch<SidebarFolderArrayResponse>(`http://localhost:5000/api/folder/${id}`, option)
  };

  renameFolder(id: number, name: string) {
    this.sidebarFolders().map((sidebarFolder: SidebarFolder) => {
      if (id === sidebarFolder.id) sidebarFolder.name = name
    })
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
