import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SettingComponent } from './setting/setting.component';
import { SettingRoutingModule } from './settings-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    DragDropModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),

    SettingRoutingModule,
  ],
})
export class SettingsModule {}
