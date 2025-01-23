import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BookmarkFolderComponent } from './bookmark-detail/bookmark-detail.component';
import { FolderFormComponent } from '../../Shared/components/folder-input-box/folder-input-box.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { BookmarkInputBoxComponent } from '../../Shared/components/bookmark-input-box/bookmark-input-box.component';
import { BookmarkRoutingModule } from './bookmark-routing.module';
import { EmptyBookmarkComponent } from '../../Shared/components/empty-bookmark/empty-bookmark.component';


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
