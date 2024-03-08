import { Injectable, WritableSignal, signal } from '@angular/core';
import { Folder, NestedFolderResponse, sidebarFolderResponse } from '../Model/folder';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  private nestedFolder: WritableSignal<Folder[]> = signal([
    {
      id: 1,
      title: "Design Inspiration"
    },
    {
      id: 2,
      title: "Dribble"
    },
    {
      id: 3,
      title: "Mobbin"
    }
  ])

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
      const titleA = a.title || ''; // Use an empty string if a.title is undefined
      const titleB = b.title || ''; // Use an empty string if b.title is undefined

      return titleA.localeCompare(titleB);
    });

    return sortedData;
  }

  addNestedFolder(name: string) {
    this.nestedFolder().push({ id: this.nestedFolder.length + 1, title: name })
  }

  deleteNestedFolder(id: number) {
    this.nestedFolder.set(this.nestedFolder().filter((item) => item.id !== id))
  }
}
