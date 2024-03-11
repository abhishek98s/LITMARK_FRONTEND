import { Injectable, WritableSignal, signal } from '@angular/core';
import { Folder, FolderApiBody, NestedFolderResponse } from '../Model/nestedfolder.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  private nestedFolder: WritableSignal<Folder[]> = signal([])

  constructor(private http: HttpClient) { }

  // Nested Folder

  fetchFolder(parentFolderId: number) {
    this.http.get<NestedFolderResponse>(`http://localhost:5000/api/folder/${parentFolderId}`).pipe(
      map((res: NestedFolderResponse) => res.data),
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

  addNestedFolder(folderBodyObj: FolderApiBody) {
    return this.http.post<NestedFolderResponse>(`http://localhost:5000/api/folder/`, folderBodyObj)
  }

  deleteNestedFolder(id: number) {
    this.nestedFolder.set(this.nestedFolder().filter((item) => item.id !== id))
  }
}
