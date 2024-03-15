import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from './services/breadcrumb.service';
import { sidebarFolderService } from './services/sidebarFolder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService, private sidebarFolderService: sidebarFolderService) { }

  ngOnInit(): void {
    this.breadcrumbService.setStoredBreadCrumbs();
    const id = this.breadcrumbService.getIdOfFirstItem()
    setTimeout(() => this.sidebarFolderService.setFolderActive(id),1000)
  }
}

