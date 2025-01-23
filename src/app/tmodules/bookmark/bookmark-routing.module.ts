import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookmarkFolderComponent } from './bookmark-detail/bookmark-detail.component';
import { RecentBoomkarkPageComponent } from './recent-boomkark-page/recent-boomkark-page.component';
import { LayoutComponent } from '../layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'recent', pathMatch: 'full' },
      { path: 'recent', component: RecentBoomkarkPageComponent },
      { path: ':id', component: BookmarkFolderComponent },
      { path: '**', redirectTo: 'recent' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookmarkRoutingModule {}
