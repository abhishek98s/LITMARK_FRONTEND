import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { BookmarkService } from '../../bookmark.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
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
    this.dataService.state.sidebar = !this.dataService.state.sidebar;
  }
}
