import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';


interface User {
  id: number,
  username: string,
  email: string
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('dropdown') dropdownElement!: ElementRef;

  constructor(private router: Router, private jwtHelper: JwtHelperService, public dropDownService: dropDownService, private authService: AuthService) { }

  uniqueString = 'profile-menu'
  userData!: User;

  ngOnInit(): void {
    this.dropDownService.closeDropdown(this.uniqueString);
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }
    this.userData = this.jwtHelper.decodeToken(token) as User;
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
