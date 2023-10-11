import { Component } from '@angular/core';
import { BookmarkService } from './bookmark.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Litmark';

  constructor(public dataService: BookmarkService) { }

  toggleSidebar(): void {
    this.dataService.sidebar = !this.dataService.sidebar;
  }
}
