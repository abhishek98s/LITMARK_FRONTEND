import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PrimaryBtnComponent } from './Button/primary-btn/primary-btn.component';
import { SecondaryBtnComponent } from './Button/secondary-btn/secondary-btn.component';
import { TeritaryBtnComponent } from './Button/teritary-btn/teritary-btn.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { AddComponent } from './Button/Add/add.component';
import { FolderComponent } from './folder/folder.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFilterBoxComponent } from './search-filter-box/search-filter-box.component';
import { ChipComponent } from './chip/chip.component';
import { RecentBookmarkComponent } from './recent-bookmark/recent-bookmark.component';
import { RouterModule } from '@angular/router';
import { NestedFolderComponent } from './nested-folder/nested-folder.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { FormsModule } from '@angular/forms';


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
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
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
    RouterModule,
    NestedFolderComponent,
    BookmarkComponent
  ]
})
export class SharedModule { }
