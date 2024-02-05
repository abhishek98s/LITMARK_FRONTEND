import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FlagService } from 'src/app/services/flag.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public dropdwonService: FlagService) { }
  @ViewChild('dropdown') dropdownElement!: ElementRef;

  toggleProfileMenu(event: Event) {
    if (this.dropdwonService.isOpen('profile-dropdown')) {
      this.dropdwonService.closeDropdown('profile-dropdown');
    } else {
      this.dropdwonService.openDropdown('profile-dropdown');
    }
    event.stopPropagation();
  }

  onDropdownItemClick() {
    this.dropdwonService.closeDropdown('profile-dropdown');
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropdwonService.isOpen('profile-dropdown') === false) { return }
    if (this.dropdwonService.isOpen('profile-dropdown') && !this.dropdownElement.nativeElement.contains(event.target)) {
      this.dropdwonService.clearDropdowns();
    }
  }
}
