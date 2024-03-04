import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { dropDownService } from 'src/app/services/dropdown.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('dropdown') dropdownElement!: ElementRef;

  constructor(public dropDownService: dropDownService, private authService: AuthService) { }

  uniqueString = 'profile-menu'

  ngOnInit(): void {
    this.dropDownService.closeDropdown(this.uniqueString);
  }

  toggleProfileMenu(event: Event) {
    this.dropDownService.toggle(this.uniqueString);
    event.stopPropagation();
  }

  logout() {
    this.authService.onLogout();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropDownService.isOpen(this.uniqueString) === false) { return }
    if (this.dropDownService.isOpen(this.uniqueString) && !this.dropdownElement.nativeElement.contains(event.target)) {
      this.dropDownService.clearDropdowns();
    }
  }
}
