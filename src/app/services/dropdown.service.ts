import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class dropDownService {
  private openDropdowns: Set<string> = new Set<string>();

  private filterType = signal('Date');

  constructor() {
    this.clearDropdowns()
  }

  getFilterType() {
    return this.filterType()
  }

  setFilterType(type: string) {
    this.filterType.set(type);
    console.log(type)
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

  toggle(uniqueString: string) {
    if (this.isOpen(uniqueString)) {
      this.closeDropdown(uniqueString);
    } else {
      this.openDropdown(uniqueString);
    }
  }
}
