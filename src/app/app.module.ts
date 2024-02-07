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
import { LayoutComponent } from './Modules/layout/layout.component';
import { RegisterComponent } from './Modules/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TopPageComponent,
    BookmarkFolderComponent,
    LoginComponent,
    LayoutComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'title', content: 'Updated Page Title' });
  }
}
