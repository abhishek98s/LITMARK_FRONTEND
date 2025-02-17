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
import { RecentBoomkarkPageComponent } from './modules/bookmark/recent-boomkark-page/recent-boomkark-page.component';
import { LayoutComponent } from './modules/layout/layout/layout.component';
import { BookmarkModule } from './modules/bookmark/bookmark.module';

import { SharedModule } from './shared/shared.module';
import { LoadingComponent } from './modules/layout/loading/loading.component';
import { SettingsModule } from './modules/settings/settings.module';
import { RegisterModule } from './modules/register/register.module';
import { LoginModule } from './modules/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
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
    
    RouterModule,
    SharedModule,
    // BookmarkModule,
    RegisterModule,
    LoginModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
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
