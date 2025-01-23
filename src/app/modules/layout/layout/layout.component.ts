import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { recentBookmarkService } from '../../../services/recentbookmark.service';
import { StateService } from 'src/app/services/state.service';
import { dropDownService } from 'src/app/services/dropdown.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  title = 'Litmark';
  uniqueString = 'mobileSidebarDolderUniquestring';
  loadingString = 'loading-string';

  constructor(
    public dataService: recentBookmarkService,
    public stateService: StateService,
    public dropDownService: dropDownService,
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Litmark');
    this.metaTagService.addTags([
      { name: 'keywords', content: 'maange your bookmark your way' },
      { name: 'robots', content: 'index, follow' },
      { charset: 'UTF-8' },
    ]);
  }

  toggleSidebar(): void {
    this.stateService.state.sidebar = !this.stateService.state.sidebar;
    this.dropDownService.openDropdown(this.uniqueString);
  }
}
