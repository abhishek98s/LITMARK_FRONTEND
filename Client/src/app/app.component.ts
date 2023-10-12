import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { BookmarkService } from './bookmark.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Litmark';

  constructor(public dataService: BookmarkService, private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle("Litmark");

    this.metaTagService.addTags([
      { name: 'keywords', content: 'maange your bookmark your way' },
      { name: 'robots', content: 'index, follow' },
      { charset: 'UTF-8' }
    ]);
  }

  toggleSidebar(): void {
    this.dataService.sidebar = !this.dataService.sidebar;
  }
}
