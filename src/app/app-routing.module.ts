import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopPageComponent } from './Modules/home/top-page/top-page.component';
import { BookmarkFolderComponent } from './Modules/bookmark/top/bookmark-folder.component';
import { LoginComponent } from './Modules/login/login.component';
import { LayoutComponent } from './Modules/layout/layout/layout.component';
import { RegisterComponent } from './Modules/register/register.component';
import { SettingComponent } from './Modules/settings/setting/setting.component';

import { AuthGuard } from './guard/auth.guard';
import { loggedInGuard } from './guard/logged-in.guard';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: TopPageComponent },
      { path: 'bookmark/:id', component: BookmarkFolderComponent },
    ], canActivate: [AuthGuard]
  },
  {
    path: 'setting', component: LayoutComponent,
    children: [
      { path: '', component: SettingComponent },
    ], canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent, canActivate: [loggedInGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [loggedInGuard] },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
