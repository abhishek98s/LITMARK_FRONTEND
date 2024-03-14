import { Injectable, WritableSignal, signal } from '@angular/core';
import { BreadCrumb } from '../Model/breadcrums.model';

@Injectable({
  providedIn: 'root'
})

export class BreadcrumbService {
  private breadcrumb: WritableSignal<BreadCrumb[]> = signal([])

  constructor() { }

  getBreadcrumbs() {
    return this.breadcrumb();
  }

  setinitialBreadcrumbs(title: string, folder_id: number) {
    this.breadcrumb.set([{ title, folder_id }])
  }

  pushBreadcrumbs(title: string, folder_id: number) {
    this.breadcrumb().push({ title, folder_id })
  }

  removeBreadcrumbsAfter(index: number) {
    const arr = this.breadcrumb().slice(0, index + 1);
    this.breadcrumb.set(arr)
  }
}
