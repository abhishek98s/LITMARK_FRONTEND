import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopPageComponent } from './Modules/home/top-page/top-page.component';
import { BookmarkFolderComponent } from './Modules/bookmark-folder/bookmark-folder.component';
import { LoginComponent } from './Modules/login/login.component';
import { LayoutComponent } from './Modules/layout/layout.component';
import { RegisterComponent } from './Modules/register/register.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: TopPageComponent },
      { path: 'bookmark/:id', component: BookmarkFolderComponent },
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
