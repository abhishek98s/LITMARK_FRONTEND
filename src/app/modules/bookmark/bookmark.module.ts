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
import { RecentBoomkarkPageComponent } from './recent-boomkark-page/recent-boomkark-page.component';
import { LayoutComponent } from '../layout/layout/layout.component';
import { LoadingComponent } from '../layout/loading/loading.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    BookmarkFolderComponent,
    FolderFormComponent,
    BookmarkInputBoxComponent,
    EmptyBookmarkComponent,
    RecentBoomkarkPageComponent,
    LayoutComponent,
    LoadingComponent,
  ],
  imports: [
    FormsModule,
    BookmarkRoutingModule,
    CommonModule,
    RouterModule,
    SharedModule,
    DragDropModule,
  ],
})
export class BookmarkModule {}
