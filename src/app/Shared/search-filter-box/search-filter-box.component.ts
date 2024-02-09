import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { recentBookmarkService } from 'src/app/services/recentbookmark.service';
import { dropDownService } from 'src/app/services/dropdown.service';

@Component({
  selector: 'app-search-filter-box',
  templateUrl: './search-filter-box.component.html',
  styleUrls: ['./search-filter-box.component.scss']
})
export class SearchFilterBoxComponent implements OnInit{
  @ViewChild('dateDropdown') dropdownElement!: ElementRef;
  
  constructor(private dataService: recentBookmarkService, public dropdownService: dropDownService) { }
  
  filter: string = 'Date';
  uniqueString = 'date';

  ngOnInit(): void {
    this.filter = this.dataService.getFilterType();
  }

  toggleProfileMenu(event: Event) {
    if (this.dropdownService.isOpen(this.uniqueString)) {
      this.dropdownService.closeDropdown(this.uniqueString);
    } else {
      this.dropdownService.openDropdown(this.uniqueString);
    }
    event.stopPropagation();
  }

  sortRecentBookmarkBy(filterType: string) {
    this.dataService.sortRecentBookmarkBy(filterType)
    this.filter = this.dataService.getFilterType();
    this.dropdownService.closeDropdown(this.uniqueString);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropdownService.isOpen(this.uniqueString) === false) { return }
    if (this.dropdownService.isOpen(this.uniqueString) && !this.dropdownElement.nativeElement.contains(event.target)) {
      this.dropdownService.clearDropdowns();
    }
  }
}
