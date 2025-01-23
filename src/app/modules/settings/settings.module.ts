import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SettingComponent } from './setting/setting.component';
import { BookmarkRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [SettingComponent],
  imports: [CommonModule, RouterModule, FormsModule, BookmarkRoutingModule],
})
export class SettingsModule {}
