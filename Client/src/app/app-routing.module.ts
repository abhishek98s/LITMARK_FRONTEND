import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopPageComponent } from './Modules/home/top-page/top-page.component';
import { BookmarkFolderComponent } from './Modules/bookmark-folder/bookmark-folder.component';

const routes: Routes = [
  { path: '', component: TopPageComponent },
  { path: 'bookmark/:id', component: BookmarkFolderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
