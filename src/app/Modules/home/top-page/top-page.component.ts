import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Recentbookmark } from 'src/app/Model/recentbookmark.model';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { recentBookmarkService } from 'src/app/services/recentbookmark.service';
import { sidebarFolderService } from 'src/app/services/sidebarFolder.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss'],
})
export class TopPageComponent implements OnInit, AfterViewInit {
  recentBookmark!: Recentbookmark[];

  searchType = 'recent-bookmark'

  constructor(public recentBookmarkService: recentBookmarkService, private sidebarFolderService: sidebarFolderService, private breadcrumbService: BreadcrumbService, public stateService: StateService) { }

  ngOnInit(): void {
    this.recentBookmarkService.fetchRecentBookmarks();

    this.breadcrumbService.removeBreadcrumbsAfter(0);
  }

  ngAfterViewInit(): void {
    this.sidebarFolderService.clearActiveFolder()
  }

  filterRecentBookmarkCategory(category: string) {
    this.recentBookmarkService.filterRecentBookmarkByChip(category);
  }
}
