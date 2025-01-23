import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guard/auth.guard';
import { loggedInGuard } from './guard/logged-in.guard';
import { LandingComponent } from './modules/landing/landing.component';

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
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
    canActivate: [loggedInGuard],
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./modules/register/register.module').then(
        (m) => m.RegisterModule
      ),
    canActivate: [loggedInGuard],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
