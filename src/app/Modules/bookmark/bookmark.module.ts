import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FolderFormComponent } from '../../shared/components/folder-input-box/folder-input-box.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookmarkInputBoxComponent } from '../../shared/components/bookmark-input-box/bookmark-input-box.component';
import { EmptyBookmarkComponent } from '../../shared/components/empty-bookmark/empty-bookmark.component';
import { BookmarkRoutingModule } from './bookmark-routing.module';
import { BookmarkFolderComponent } from './bookmark-detail/bookmark-detail.component';


@NgModule({
  declarations: [
    BookmarkFolderComponent,
    FolderFormComponent,
    BookmarkInputBoxComponent,
    EmptyBookmarkComponent
  ],
  imports: [
    FormsModule,
    BookmarkRoutingModule,
    CommonModule,
    RouterModule,
    SharedModule       
  ]
})
export class BookmarkModule { }
