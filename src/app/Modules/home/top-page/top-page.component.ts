import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Recentbookmark } from 'src/app/Model/recentbookmark.model';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { recentBookmarkService } from 'src/app/services/recentbookmark.service';
import { sidebarFolderService } from 'src/app/services/sidebarFolder.service';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss'],
})
export class TopPageComponent implements OnInit, AfterViewInit {
  recentBookmark!: Recentbookmark[];

  searchType = 'recent-bookmark'

  constructor(public dataService: recentBookmarkService, private sidebarFolderService: sidebarFolderService, private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.dataService.recentBookmarkObservable.subscribe((value) => this.recentBookmark = value);
    this.breadcrumbService.removeBreadcrumbsAfter(0);
  }

  ngAfterViewInit(): void {
    this.sidebarFolderService.clearActiveFolder()
  }

  filterRecentBookmarkCategory(category: string) {
    this.dataService.filterRecentBookmarkByChip(category);
  }
}
