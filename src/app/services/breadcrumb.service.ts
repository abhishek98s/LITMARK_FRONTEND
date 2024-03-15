import { Injectable, WritableSignal, signal } from '@angular/core';
import { BreadCrumb } from '../Model/breadcrums.model';

@Injectable({
  providedIn: 'root'
})

export class BreadcrumbService {
  private breadcrumb: WritableSignal<BreadCrumb[]> = signal([])

  private currentFolder: WritableSignal<number> = signal(0);

  constructor() { }

  getBreadcrumbs() {
    return this.breadcrumb();
  }

  getIdOfLastItem(){
    return this.breadcrumb().slice(-1)[0].folder_id
  }

  getIdOfFirstItem() {
    return this.breadcrumb()[0].folder_id
  }

  storeBreadCrumbsToLocalStorage() {
    localStorage.setItem('breadcrumb', JSON.stringify(this.breadcrumb()));
  }

  setStoredBreadCrumbs() {
    this.breadcrumb.set(this.getStoredBreadcrumbs())
  }

  getStoredBreadcrumbs(): BreadCrumb[] {
    const storedBreadcrumbs = localStorage.getItem('breadcrumb');
    return storedBreadcrumbs ? JSON.parse(storedBreadcrumbs) : [];
  }

  setinitialBreadcrumbs(title: string, folder_id: number) {
    this.breadcrumb.set([{ title, folder_id }])
    this.storeBreadCrumbsToLocalStorage()
  }

  pushBreadcrumbs(title: string, folder_id: number) {
    this.breadcrumb().push({ title, folder_id })
    this.storeBreadCrumbsToLocalStorage()
  }

  removeBreadcrumbsAfter(index: number) {
    const arr = this.breadcrumb().slice(0, index + 1);
    this.breadcrumb.set(arr)
  }
}
