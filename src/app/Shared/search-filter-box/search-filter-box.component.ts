import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BookmarkService } from 'src/app/bookmark.service';
import { FlagService } from 'src/app/services/flag.service';

@Component({
  selector: 'app-search-filter-box',
  templateUrl: './search-filter-box.component.html',
  styleUrls: ['./search-filter-box.component.scss']
})
export class SearchFilterBoxComponent {
  @ViewChild('dateDropdown') dropdownElement!: ElementRef;

  filter: string = 'Date';
  uniqueString = 'date';

  constructor(private dataService: BookmarkService, public dropdownService: FlagService) { }

  toggleProfileMenu(event: Event) {
    if (this.dropdownService.isOpen(this.uniqueString)) {
      this.dropdownService.closeDropdown(this.uniqueString);
    } else {
      this.dropdownService.openDropdown(this.uniqueString);
    }
    event.stopPropagation();
  }

  filterRecentBookmarkBy(filterType: string) {
    this.dataService.filterRecentBookmarkBy(filterType)
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropdownService.isOpen(this.uniqueString) === false) { return }
    if (this.dropdownService.isOpen(this.uniqueString) && !this.dropdownElement.nativeElement.contains(event.target)) {
      this.dropdownService.clearDropdowns();
    }
  }
}
