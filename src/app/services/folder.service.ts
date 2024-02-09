import { Injectable } from '@angular/core';
import { Folder } from '../Model/folder';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  private nestedFolder: Folder[] = [
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
  ]

  constructor() { }

  // Nested Folder
  getNestedFolder() {
    const sortedData: Folder[] = this.nestedFolder.sort((a, b): number => {

      // If both have the same folder property, sort alphabetically by title
      const titleA = a.title || ''; // Use an empty string if a.title is undefined
      const titleB = b.title || ''; // Use an empty string if b.title is undefined

      return titleA.localeCompare(titleB);
    });

    return sortedData;
  }

  addNestedFolder(name: string) {
    this.nestedFolder.push({ id: this.nestedFolder.length + 1, title: name })
  }

  deleteNestedFolder(id: number) {
    this.nestedFolder = this.nestedFolder.filter((item) => item.id !== id)
  }
}
