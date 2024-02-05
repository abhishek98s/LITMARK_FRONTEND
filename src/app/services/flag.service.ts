import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlagService {

  constructor() { }

  private openDropdowns: Set<string> = new Set<string>();

  isOpen(identifier: string): boolean {
    return this.openDropdowns.has(identifier);
  }

  openDropdown(identifier: string) {
    this.openDropdowns.add(identifier);
  }

  closeDropdown(identifier: string) {
    this.openDropdowns.delete(identifier);
  }
  clearDropdowns() {
    this.openDropdowns.clear();
  }
}
