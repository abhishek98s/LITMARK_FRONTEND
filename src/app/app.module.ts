import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Meta, provideClientHydration } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { provideToastr, ToastrModule } from 'ngx-toastr';
import { loggingInterceptor } from './auth.interceptor';
import { AuthGuard } from './guard/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmarkModule } from './modules/bookmark/bookmark.module';

import { SharedModule } from './shared/shared.module';
import { LandingComponent } from './modules/landing/landing.component';
import { AccordionModule } from './shared/components/accordion/accordion.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { BookmarkRoutingModule } from './modules/bookmark/bookmark-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    // LoginComponent,
    // RegisterComponent,
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
    CommonModule,
    FormsModule,
    RouterModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    
    AppRoutingModule,
    AccordionModule,
    

  ],
  providers: [
    AuthGuard,
    provideHttpClient(withInterceptors([loggingInterceptor])),
    provideClientHydration(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'title', content: 'Updated Page Title' });
  }
}
