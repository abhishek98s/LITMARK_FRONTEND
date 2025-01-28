import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { BookmarkInputBoxComponent } from '../../shared/components/bookmark-input-box/bookmark-input-box.component';
import { EmptyBookmarkComponent } from '../../shared/components/empty-bookmark/empty-bookmark.component';
import { BookmarkRoutingModule } from './bookmark-routing.module';
import { BookmarkFolderDetailComponent } from './bookmark-detail/bookmark-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RecentBoomkarkPageComponent } from './recent-boomkark-page/recent-boomkark-page.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [BookmarkFolderDetailComponent, RecentBoomkarkPageComponent],
  imports: [
    BrowserAnimationsModule,
    DragDropModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),

    BookmarkRoutingModule,
    SharedModule,
  ],
})
export class BookmarkModule {}
