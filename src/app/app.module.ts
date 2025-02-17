import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { ToastrModule } from 'ngx-toastr';
import { loggingInterceptor } from './auth.interceptor';
import { AuthGuard } from './guard/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { RegisterModule } from './modules/register/register.module';
import { LoginModule } from './modules/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        allowedDomains: ['http://localhost:4200/'],
        disallowedRoutes: ['example.com/auth'],
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
