import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guard/auth.guard';
import { loggedInGuard } from './guard/logged-in.guard';
import { LandingComponent } from './modules/landing/landing.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    canActivate: [loggedInGuard],
  },
  {
    path: 'bookmark',
    loadChildren: () =>
      import('./modules/bookmark/bookmark.module').then(
        (m) => m.BookmarkModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('./modules/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [loggedInGuard],
  },
  { path: '**', redirectTo: '/auth/login' },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
