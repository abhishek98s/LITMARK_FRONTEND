import { HttpClient } from '@angular/common/http';

import { Injectable, WritableSignal, signal } from '@angular/core';
import {
  Folder,
  FolderApiBody,
  NestedFolderArrayResponse,
  NestedFolderResponse,
} from 'src/app/model/nestedfolder.model';
import { map } from 'rxjs';
import { ToastService } from './toast.service';
import { StateService } from './state.service';
import { APP_URL } from '../utils/app.config';

@Injectable({
  providedIn: 'root',
})
export class FolderService {
  private currentParentId!: number;

  private nestedFolder: WritableSignal<Folder[]> = signal([]);

  constructor(
    private http: HttpClient,
    private toast: ToastService,
    private stateService: StateService
  ) {}

  // Nested Folder
  fetchFolder(parentFolderId: number) {
    this.stateService.state.sub_loading = true;
    this.http
      .get<NestedFolderArrayResponse>(`${APP_URL}/folder/${parentFolderId}`)
      .pipe(map((res: NestedFolderArrayResponse) => res.data))
      .subscribe((folders: Folder[]) => {
        this.nestedFolder.set(folders);
        setTimeout(() => {
          this.stateService.state.sub_loading = false;
        }, 1000);
      });
  }

  getNestedFolder() {
    return this.nestedFolder();
  }

  postNestedFolder(folderBodyObj: FolderApiBody) {
    this.http
      .post<NestedFolderResponse>(`${APP_URL}/folder/`, folderBodyObj)
      .subscribe({
        next: (res) => {
          this.nestedFolder().push(res.data);
        },
        error: () => {
          this.toast.error('Failed to add folder');
        },
      });
  }

  updateFolderName(folderId: number, folderName: string) {
    this.http
      .patch<NestedFolderArrayResponse>(`${APP_URL}/folder/${folderId}`, {
        name: folderName,
      })
      .subscribe({
        next: () => {
          this.nestedFolder().map((nestedFolder: Folder) => {
            if (folderId === nestedFolder.id) nestedFolder.name = folderName;
          });
        },
        error: () => {
          this.toast.error('Failed to update folder');
        },
      });
  }

  deleteNestedFolder(folderId: number) {
    return this.http
      .delete<NestedFolderArrayResponse>(`${APP_URL}/folder/${folderId}`)
      .subscribe({
        next: () => {
          const filteredNestedFolder = this.nestedFolder().filter(
            (nestedFolder: Folder) => nestedFolder.id !== folderId
          );
          this.nestedFolder.set(filteredNestedFolder);
        },
        error: () => {
          this.toast.error('Failed to delete folder');
        },
      });
  }

  sortNestedFolderBy(sortBy: string, order: string) {
    const storedFolders = localStorage.getItem('breadcrumb');
    const currentFolder = JSON.parse(storedFolders!).slice(-1)[0].folder_id;
    this.stateService.state.sub_loading = true;

    return this.http
      .get<NestedFolderArrayResponse>(
        `${APP_URL}/folder/sort?sort=${sortBy}&folder_id=${currentFolder}&order=${order}`
      )
      .subscribe({
        next: (res) => {
          this.nestedFolder.set(res.data);
          setTimeout(() => {
            this.stateService.state.sub_loading = false;
          }, 1000);
        },
        error: () => {
          this.toast.error('Failed to retrive folder');
        },
      });
  }

  setParentId(id: number) {
    this.currentParentId = id;
  }

  getParentId() {
    return this.currentParentId;
  }
}
