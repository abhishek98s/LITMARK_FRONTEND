import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class dropDownService {
  private openDropdowns: Set<string> = new Set<string>();

  constructor() {
    this.clearDropdowns()
  }

  isOpen(identifier: string): boolean {
    return this.openDropdowns.has(identifier);
  }

  openDropdown(identifier: string) {
    this.clearDropdowns()
    this.openDropdowns.add(identifier);
  }

  closeDropdown(identifier: string) {
    this.openDropdowns.delete(identifier);
  }
  clearDropdowns() {
    this.openDropdowns.clear();
  }
}
