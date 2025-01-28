import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingComponent } from './setting/setting.component';
import { LayoutComponent } from 'src/app/shared/layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: SettingComponent },
      { path: '**', redirectTo: 'recent' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule {}
