import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './top/register.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: RegisterComponent },
      { path: '**', redirectTo: 'recent' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
