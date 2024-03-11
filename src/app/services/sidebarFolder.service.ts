import { Injectable, WritableSignal, signal } from '@angular/core';
import { SidebarFolder, SidebarFolderApiBody, SidebarFolderResponse } from '../Model/sidebarFolder.model';
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
  addFolder(body: SidebarFolderApiBody) {
    return this.http.post<SidebarFolderResponse>('http://localhost:5000/api/folder', body)
  }

  fetchFolder() {
    this.http.get<SidebarFolderResponse>('http://localhost:5000/api/folder').pipe(
      map((res: SidebarFolderResponse) => res.data),
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
    return this.http.delete<SidebarFolderResponse>(`http://localhost:5000/api/folder/${id}`)
  };

  updateFolder(id: number, option: UpdateFolderBody) {
    return this.http.patch<SidebarFolderResponse>(`http://localhost:5000/api/folder/${id}`, option)
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
