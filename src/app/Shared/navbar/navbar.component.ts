import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FlagService } from 'src/app/services/flag.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public dropdownService: FlagService) { }
  @ViewChild('dropdown') dropdownElement!: ElementRef;

  toggleProfileMenu(event: Event) {
    if (this.dropdownService.isOpen('profile-dropdown')) {
      this.dropdownService.closeDropdown('profile-dropdown');
    } else {
      this.dropdownService.openDropdown('profile-dropdown');
    }
    event.stopPropagation();
  }

  onDropdownItemClick() {
    this.dropdownService.closeDropdown('profile-dropdown');
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropdownService.isOpen('profile-dropdown') === false) { return }
    if (this.dropdownService.isOpen('profile-dropdown') && !this.dropdownElement.nativeElement.contains(event.target)) {
      this.dropdownService.clearDropdowns();
    }
  }
}
