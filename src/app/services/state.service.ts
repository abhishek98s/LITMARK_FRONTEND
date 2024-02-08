import { Injectable } from '@angular/core';
import { State } from '../Model/folder';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor() { }

  public state = <State>{
    sidebar: false,
    folderInputbox: false,
    bookmarkInputbox: false,
    sidebarFolderkInputbox: false,
  };

  setToFalse() {
    this.state.sidebar = false;
    this.state.folderInputbox = false;
    this.state.bookmarkInputbox = false;
    this.state.sidebarFolderkInputbox = false;
  }
}