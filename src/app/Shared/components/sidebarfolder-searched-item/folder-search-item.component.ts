import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarFolder } from 'src/app/model/sidebarFolder.model';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { dropDownService } from 'src/app/services/dropdown.service';
import { SearchTextService } from 'src/app/services/search-text.service';
import { sidebarFolderService } from 'src/app/services/sidebarFolder.service';

@Component({
  selector: 'app-sidebarfolder-searched-item',
  templateUrl: './sidebarfolder-searched-item.component.html',
  styleUrls: ['./sidebarfolder-searched-item.component.scss'],
})
export class FolderSearchItemComponent {
  @Input() folder!: SidebarFolder;

  constructor(
    private dropDownService: dropDownService,
    private searchTextService: SearchTextService,
    private sidebarFolderService: sidebarFolderService,
    private breadcrumbService: BreadcrumbService,
    private router: Router
  ) {}

  onFolderSearchClick() {
    this.dropDownService.clearDropdowns();
    this.searchTextService.clearSearchText();

    this.sidebarFolderService.setFolderActive(this.folder.id);
    this.breadcrumbService.setinitialBreadcrumbs(
      this.folder.name,
      this.folder.id
    );

    this.router.navigate([`bookmark/${this.folder.id}`]);
  }
}
