import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PrimaryBtnComponent } from './Button/primary-btn/primary-btn.component';
import { SecondaryBtnComponent } from './Button/secondary-btn/secondary-btn.component';
import { TeritaryBtnComponent } from './Button/teritary-btn/teritary-btn.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { AddFolderComponent } from './add-folder/add-folder.component';
import { FolderComponent } from './folder/folder.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    PrimaryBtnComponent,
    SecondaryBtnComponent,
    TeritaryBtnComponent,
    InputBoxComponent,
    AddFolderComponent,
    FolderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    PrimaryBtnComponent,
    SecondaryBtnComponent,
    TeritaryBtnComponent,
    InputBoxComponent,
    AddFolderComponent,
    FolderComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
