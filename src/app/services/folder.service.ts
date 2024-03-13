import { Injectable, WritableSignal, signal } from '@angular/core';
import { Folder, FolderApiBody, NestedFolderArrayResponse, NestedFolderResponse } from '../Model/nestedfolder.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  private currentParentId!: number;

  private nestedFolder: WritableSignal<Folder[]> = signal([])

  constructor(private http: HttpClient) { }

  // Nested Folder

  fetchFolder(parentFolderId: number) {
    this.http.get<NestedFolderArrayResponse>(`http://localhost:5000/api/folder/${parentFolderId}`).pipe(
      map((res: NestedFolderArrayResponse) => res.data),
    ).subscribe((folders: Folder[]) => {
      this.nestedFolder.set(folders);
    });
  }

  getNestedFolder() {
    const sortedData: Folder[] = this.nestedFolder().sort((a, b): number => {

      // If both have the same folder property, sort alphabetically by title
      const titleA = a.name || ''; // Use an empty string if a.title is undefined
      const titleB = b.name || ''; // Use an empty string if b.title is undefined

      return titleA.localeCompare(titleB);
    });

    return sortedData;
  }

  postNestedFolder(folderBodyObj: FolderApiBody) {
    return this.http.post<NestedFolderResponse>(`http://localhost:5000/api/folder/`, folderBodyObj)
  }

  addNestedFolder(folder: Folder) {
    this.nestedFolder().push(folder)
  }

  updateFolderName(folderId: number, folderName: string,) {
    return this.http.patch<NestedFolderArrayResponse>(`http://localhost:5000/api/folder/${folderId}`, { name: folderName })
  }

  renameNestedFolderById(id: number, name: string) {
    this.nestedFolder().map((nestedFolder: Folder) => {
      if (id === nestedFolder.id) nestedFolder.name = name
    })
  }

  deleteNestedFolder(folderId: number) {
    return this.http.delete<NestedFolderArrayResponse>(`http://localhost:5000/api/folder/${folderId}`)
  }

  removeNestedFolderById(id: number) {
    const filteredNestedFolder = this.nestedFolder().filter((nestedFolder: Folder) => nestedFolder.id !== id)
    this.nestedFolder.set(filteredNestedFolder)
  }

  setParentId(id: number) {
    this.currentParentId = id
  }

  getParentId() {
    return this.currentParentId;
  }
}
