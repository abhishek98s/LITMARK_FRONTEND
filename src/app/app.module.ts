import { NgModule } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPageComponent } from './Modules/home/top-page/top-page.component';
import { SharedModule } from './Shared/shared.module';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BookmarkFolderComponent } from './Modules/bookmark-folder/bookmark-folder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Modules/login/login.component';
import { LayoutComponent } from './Modules/layout/layout/layout.component';
import { RegisterComponent } from './Modules/register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guard/auth.guard';
import { SettingComponent } from './Modules/settings/setting/setting.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthInterceptor } from './auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TopPageComponent,
    BookmarkFolderComponent,
    LoginComponent,
    LayoutComponent,
    RegisterComponent,
    SettingComponent,
  ],
  imports: [
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'), // Provide a function to retrieve the token from storage
        allowedDomains: ['http://localhost:4200/'], // Specify the domains where the token should be sent
        disallowedRoutes: ['example.com/auth'] // Specify routes that don't need the token
      }
    }),
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(), 
    BrowserAnimationsModule
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'title', content: 'Updated Page Title' });
  }
}
