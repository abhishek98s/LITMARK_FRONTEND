import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChipComponent } from './components/chip/chip.component';
import { AddBtnComponent } from './components/button/add-btn/add-btn.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { SidebarFolderComponent } from './components/sidebarfolder/sidebarfolder.component';
import { NestedFolderComponent } from './components/nested-folder/nested-folder.component';
import { PrimaryBtnComponent } from './components/button/primary-btn/primary-btn.component';
import { TeritaryBtnComponent } from './components/button/teritary-btn/teritary-btn.component';
import { SecondaryBtnComponent } from './components/button/secondary-btn/secondary-btn.component';
import { SearchFilterBoxComponent } from './components/search-filter-box/search-filter-box.component';
import { BookmarkSearchItemComponent } from './components/bookmark-search-item/bookmark-search.component';
import { SidebarFolderSearchedItem } from './components/sidebarfolder-searched-item/sidebarfolder-searched-item.component';
import { BookmarkInputBoxComponent } from './components/bookmark-input-box/bookmark-input-box.component';
import { EmptyBookmarkComponent } from './components/empty-bookmark/empty-bookmark.component';
import { FolderInputBoxComponent } from './components/folder-input-box/folder-input-box.component';
import { LoadingComponent } from './components/loading/loading.component';
import { EmptyFolderComponent } from './components/empty-folder/empty-folder.component';
import { SubLoadingComponent } from './components/sub-loading/sub-loading.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { RecentBookmarkComponent } from './components/recent-bookmark/recent-bookmark.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    BookmarkComponent,
    BookmarkInputBoxComponent,
    BookmarkSearchItemComponent,
    AddBtnComponent,
    PrimaryBtnComponent,
    SecondaryBtnComponent,
    TeritaryBtnComponent,
    ChipComponent,
    EmptyBookmarkComponent,
    EmptyFolderComponent,
    FolderInputBoxComponent,
    InputBoxComponent,
    LoadingComponent,
    NestedFolderComponent,
    RecentBookmarkComponent,
    SearchFilterBoxComponent,
    SidebarFolderComponent,
    SidebarFolderSearchedItem,
    SubLoadingComponent,

    SidebarComponent,
    NavbarComponent,
    LayoutComponent,
  ],
  imports: [
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule,

    BookmarkComponent,
    BookmarkInputBoxComponent,
    BookmarkSearchItemComponent,
    AddBtnComponent,
    PrimaryBtnComponent,
    SecondaryBtnComponent,
    TeritaryBtnComponent,
    ChipComponent,
    EmptyBookmarkComponent,
    EmptyFolderComponent,
    FolderInputBoxComponent,
    InputBoxComponent,
    LoadingComponent,
    NestedFolderComponent,
    RecentBookmarkComponent,
    SearchFilterBoxComponent,
    SidebarFolderComponent,
    SidebarFolderSearchedItem,
    SubLoadingComponent,

    SidebarComponent,
    NavbarComponent,
  ],
})
export class SharedModule {}
