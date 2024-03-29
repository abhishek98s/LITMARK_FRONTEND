import { Injectable, WritableSignal, signal } from '@angular/core';
import { SidebarFolder, SidebarFolderApiBody, SidebarFolderArrayResponse, SidebarFolderResponse } from '../Model/sidebarFolder.model';
import { BehaviorSubject, forkJoin, map, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastService } from './toast.service';
import { dropDownService } from './dropdown.service';


interface UpdateFolderBody {
  name: string;
}
@Injectable({
  providedIn: 'root'
})


export class sidebarFolderService {
  private sidebarFolders: WritableSignal<SidebarFolder[]> = signal([])

  private searchResult: WritableSignal<SidebarFolder[]> = signal([]);

  constructor(private http: HttpClient, private dropDownService: dropDownService, private toast: ToastService) { }

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
    this.http.post<SidebarFolderResponse>('http://localhost:5000/api/folder', body).subscribe({
      next: (res: SidebarFolderResponse) => {
        const sidebarFolder = res.data;
        this.sidebarFolders().push(sidebarFolder);

      },
      error: (error) => {
        const err = error.error.msg;
        if (!err) {
          this.toast.error("Check connection.");
          return
        }
        this.toast.error(err)
      }
    })
  }


  updateFolder(id: number, option: UpdateFolderBody) {
    this.http.patch<SidebarFolderArrayResponse>(`http://localhost:5000/api/folder/${id}`, option).subscribe({
      next: () => {
        this.sidebarFolders().map((sidebarFolder: SidebarFolder) => {
          if (id === sidebarFolder.id) sidebarFolder.name = option.name
        })
        this.toast.success('Rename folder sucessfully.')
      },
      error: (error) => {
        const err = error.error.msg;
        if (!err) {
          this.toast.error("Check connection.");
          return
        }
        this.toast.error(err)
      }
    })
  };


  deleteFolder(id: number) {
    this.http.delete<SidebarFolderArrayResponse>(`http://localhost:5000/api/folder/${id}`).subscribe({
      next: () => {
        let removedData = this.sidebarFolders().filter((sidebarFolder: SidebarFolder) => sidebarFolder.id !== id)
        this.sidebarFolders.set(removedData)

        this.toast.success('Folder deleted sucessfully.')
      },
      error: (error) => {
        const err = error.error.msg;
        if (!err) {
          this.toast.error("Check connection.");
          return
        }
        this.toast.error(err)
      }
    })
  }

  getFolderImage(id: number) {
    return this.http.get(`http://localhost:5000/api/image/${id}`);
  }

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

  setFolderActive(folder_id: number) {
    const sidebarFoldersArr = this.sidebarFolders();
    const activeFolder = sidebarFoldersArr.find((item: SidebarFolder) => item.id === folder_id);

    sidebarFoldersArr.forEach((item: SidebarFolder) => {
      item.active = item === activeFolder;
    });

    this.dropDownService.setFilterType('Date')
  }

  clearActiveFolder() {
    const sidebarFoldersArr = this.sidebarFolders();

    sidebarFoldersArr.forEach((item: SidebarFolder) => {
      item.active = false;
    });

    this.sidebarFolders.set(sidebarFoldersArr)
  }
}
