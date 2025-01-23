import { Injectable, WritableSignal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  SidebarFolder,
  SidebarFolderApiBody,
  SidebarFolderArrayResponse,
  SidebarFolderResponse,
} from '../model/sidebarFolder.model';
import { map } from 'rxjs';
import { ToastService } from './toast.service';
import { dropDownService } from './dropdown.service';
import { APP_URL } from '../utils/app.config';

interface UpdateFolderBody {
  name: string;
}
@Injectable({
  providedIn: 'root',
})
export class sidebarFolderService {
  private sidebarFolders: WritableSignal<SidebarFolder[]> = signal([]);

  private searchResult: WritableSignal<SidebarFolder[]> = signal([]);

  constructor(
    private http: HttpClient,
    private dropDownService: dropDownService,
    private toast: ToastService
  ) {}

  // Folders

  fetchFolder() {
    this.http
      .get<SidebarFolderArrayResponse>(`${APP_URL}/folder`)
      .pipe(map((res: SidebarFolderArrayResponse) => res.data))
      .subscribe((Folders: SidebarFolder[]) => {
        this.sidebarFolders.set(Folders);
      });
  }

  getFolder() {
    return this.sidebarFolders;
  }

  postSidebarFolder(body: SidebarFolderApiBody) {
    this.http.post<SidebarFolderResponse>(`${APP_URL}/folder`, body).subscribe({
      next: (res: SidebarFolderResponse) => {
        const sidebarFolder = res.data;
        this.sidebarFolders().push(sidebarFolder);
      },
      error: (error) => {
        const err = error.error.message;
        if (!err) {
          this.toast.error('Check connection.');
          return;
        }
        this.toast.error(err);
      },
    });
  }

  updateFolder(id: number, option: UpdateFolderBody) {
    this.http
      .patch<SidebarFolderArrayResponse>(`${APP_URL}/folder/${id}`, option)
      .subscribe({
        next: () => {
          this.sidebarFolders().map((sidebarFolder: SidebarFolder) => {
            if (id === sidebarFolder.id) sidebarFolder.name = option.name;
          });
          this.toast.success('Rename folder sucessfully.');
        },
        error: (error) => {
          const err = error.error.message;
          if (!err) {
            this.toast.error('Check connection.');
            return;
          }
          this.toast.error(err);
        },
      });
  }

  deleteFolder(id: number) {
    this.http
      .delete<SidebarFolderArrayResponse>(`${APP_URL}/folder/${id}`)
      .subscribe({
        next: () => {
          let removedData = this.sidebarFolders().filter(
            (sidebarFolder: SidebarFolder) => sidebarFolder.id !== id
          );
          this.sidebarFolders.set(removedData);

          this.toast.success('Folder deleted sucessfully.');
        },
        error: (error) => {
          const err = error.error.message;
          if (!err) {
            this.toast.error('Check connection.');
            return;
          }
          this.toast.error(err);
        },
      });
  }

  getFolderImage(id: number) {
    return this.http.get(`${APP_URL}/api/image/${id}`);
  }

  populateSearchResult(searchText: string) {
    let filterData = this.sidebarFolders().filter((folder) => {
      const folderTitle = folder.name.toLocaleLowerCase();
      return folderTitle.includes(searchText.toLowerCase());
    });
    this.searchResult.set(filterData);
  }

  sidebarFolderSearchResult() {
    return this.searchResult();
  }

  isSearchEmpty() {
    return this.searchResult().length == 0 ? 1 : 0;
  }

  setFolderActive(folder_id: number) {
    const sidebarFoldersArr = this.sidebarFolders();
    const activeFolder = sidebarFoldersArr.find(
      (item: SidebarFolder) => item.id === folder_id
    );

    sidebarFoldersArr.forEach((item: SidebarFolder) => {
      item.active = item === activeFolder;
    });

    this.dropDownService.setFilterType('Date');
  }

  clearActiveFolder() {
    const sidebarFoldersArr = this.sidebarFolders();

    sidebarFoldersArr.forEach((item: SidebarFolder) => {
      item.active = false;
    });

    this.sidebarFolders.set(sidebarFoldersArr);
  }
}
