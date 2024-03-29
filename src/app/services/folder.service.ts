import { Injectable, WritableSignal, signal } from '@angular/core';
import { Folder, FolderApiBody, NestedFolderArrayResponse, NestedFolderResponse } from '../Model/nestedfolder.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { ToastService } from './toast.service';
import { BreadCrumb } from '../Model/breadcrums.model';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  private currentParentId!: number;

  private nestedFolder: WritableSignal<Folder[]> = signal([])

  constructor(private http: HttpClient, private toast: ToastService) { }

  // Nested Folder
  fetchFolder(parentFolderId: number) {
    this.http.get<NestedFolderArrayResponse>(`http://localhost:5000/api/folder/${parentFolderId}`).pipe(
      map((res: NestedFolderArrayResponse) => res.data),
    ).subscribe((folders: Folder[]) => {
      this.nestedFolder.set(folders);
    });
  }

  getNestedFolder() {
    return this.nestedFolder();
  }

  postNestedFolder(folderBodyObj: FolderApiBody) {
    this.http.post<NestedFolderResponse>(`http://localhost:5000/api/folder/`, folderBodyObj).subscribe({
      next: (res) => {
        this.nestedFolder().push(res.data)
      },
      error: () => {
        this.toast.error('Failed to add folder');
      }
    })
  }

  updateFolderName(folderId: number, folderName: string,) {
    this.http.patch<NestedFolderArrayResponse>(`http://localhost:5000/api/folder/${folderId}`, { name: folderName }).subscribe({
      next: () => {
        this.nestedFolder().map((nestedFolder: Folder) => {
          if (folderId === nestedFolder.id) nestedFolder.name = folderName
        })
      },
      error: () => {
        this.toast.error('Failed to update folder');
      }
    })
  }

  deleteNestedFolder(folderId: number) {
    return this.http.delete<NestedFolderArrayResponse>(`http://localhost:5000/api/folder/${folderId}`).subscribe({
      next: () => {
        const filteredNestedFolder = this.nestedFolder().filter((nestedFolder: Folder) => nestedFolder.id !== folderId)
        this.nestedFolder.set(filteredNestedFolder)
      },
      error: () => {
        this.toast.error('Failed to delete folder');
      }
    });
  }

  sortNestedFolderBy(sortBy: string, order: string) {
    const storedFolders = localStorage.getItem('breadcrumb');
    const currentFolder = JSON.parse(storedFolders!).slice(-1)[0].folder_id;

    return this.http.get<NestedFolderArrayResponse>(`http://localhost:5000/api/folder/sort?sort=${sortBy}&folder_id=${currentFolder}&order=${order}`).subscribe({
      next: (res) => {
        this.nestedFolder.set(res.data)
      },
      error: () => {
        this.toast.error('Failed to retrive folder');
      }
    })
  }

  setParentId(id: number) {
    this.currentParentId = id
  }

  getParentId() {
    return this.currentParentId;
  }
}
