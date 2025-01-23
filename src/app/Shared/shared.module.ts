import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../Modules/layout/navbar/navbar.component';
import { SidebarComponent } from '../Modules/layout/sidebar/sidebar.component';
import { SubLoadingComponent } from '../Modules/layout/sub-loading/sub-loading.component';
import { EmptyFolderComponent } from '../Modules/layout/empty-folder/empty-folder.component';

import { ChipComponent } from './components/chip/chip.component';
import { AddComponent } from './components/button/add/add.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { FolderComponent } from './components/sidebarfolder/sidebarfolder.component';
import { NestedFolderComponent } from './components/nested-folder/nested-folder.component';
import { PrimaryBtnComponent } from './components/button/primary-btn/primary-btn.component';
import { TeritaryBtnComponent } from './components/button/teritary-btn/teritary-btn.component';
import { RecentBookmarkComponent } from './components/recent-bookmark/recent-bookmark.component';
import { SecondaryBtnComponent } from './components/button/secondary-btn/secondary-btn.component';
import { SearchFilterBoxComponent } from './components/search-filter-box/search-filter-box.component';
import { BookmarkSearchItemComponent } from './components/bookmark-search-item/bookmark-search.component';
import { FolderSearchItemComponent } from './components/sidebarfolder-searched-item/folder-search-item.component';

@NgModule({
  declarations: [
    SidebarComponent,
    PrimaryBtnComponent,
    SecondaryBtnComponent,
    TeritaryBtnComponent,
    InputBoxComponent,
    AddComponent,
    FolderComponent,
    NavbarComponent,
    SearchFilterBoxComponent,
    ChipComponent,
    RecentBookmarkComponent,
    NestedFolderComponent,
    BookmarkComponent,
    FolderSearchItemComponent,
    BookmarkSearchItemComponent,
    EmptyFolderComponent,
    SubLoadingComponent,

  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,    
    SidebarComponent,
    PrimaryBtnComponent,
    SecondaryBtnComponent,
    TeritaryBtnComponent,
    InputBoxComponent,
    AddComponent,
    FolderComponent,
    NavbarComponent,
    SearchFilterBoxComponent,
    ChipComponent,
    RecentBookmarkComponent,
    NestedFolderComponent,
    BookmarkComponent,
    EmptyFolderComponent,
    SubLoadingComponent,
  ]
})
export class SharedModule { }
