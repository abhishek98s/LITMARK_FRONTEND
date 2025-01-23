import { Injectable } from '@angular/core';
import { State } from 'src/app/model/nestedfolder.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor() { }

  public state = <State>{
    sidebar: false,
    loading: true,
    sub_loading: true,
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