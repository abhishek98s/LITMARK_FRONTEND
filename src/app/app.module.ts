import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { JwtModule } from '@auth0/angular-jwt';

import { ToastrModule } from 'ngx-toastr';
import { loggingInterceptor } from './auth.interceptor';
import { AuthGuard } from './guard/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecentBoomkarkPageComponent } from './Modules/bookmark/recent-boomkark-page/recent-boomkark-page.component';
import { LoginComponent } from './Modules/login/login.component';
import { LayoutComponent } from './Modules/layout/layout/layout.component';
import { RegisterComponent } from './Modules/register/register.component';
import { SettingComponent } from './Modules/settings/setting/setting.component';
import { BookmarkModule } from './Modules/bookmark/bookmark.module';

import { SharedModule } from './Shared/shared.module';
import { LoadingComponent } from './Modules/layout/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    RecentBoomkarkPageComponent,
    LoginComponent,
    LayoutComponent,
    LoadingComponent,
    RegisterComponent,
    SettingComponent,
  ],
  imports: [
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'), // Provide a function to retrieve the token from storage
        allowedDomains: ['http://localhost:4200/'], // Specify the domains where the token should be sent
        disallowedRoutes: ['example.com/auth'], // Specify routes that don't need the token
      },
    }),
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BookmarkModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [
    AuthGuard,
    provideHttpClient(withInterceptors([loggingInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'title', content: 'Updated Page Title' });
  }
}
