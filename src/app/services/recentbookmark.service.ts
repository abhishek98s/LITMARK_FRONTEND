import { Injectable, WritableSignal, signal } from '@angular/core';

import { Recentbookmark, RecentbookmarkResponse } from '../Model/recentbookmark.model';
import { Chip, } from '../Model/chip.model';
import { SearchObject, SearchResponse, bookmarkArrayResponse, } from '../Model/bookmark.model';

import { BehaviorSubject, map, tap } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class recentBookmarkService {

  constructor(private http: HttpClient, private toast: ToastService) { }

  private filterType = 'Date';

  private recentBookmark: WritableSignal<Recentbookmark[]> = signal([]);

  private chips: Chip[] = [
    {
      id: 1,
      chipName: 'All',
      active: true

    },
    {
      id: 2,
      chipName: 'Design',
      active: false

    },
    {
      id: 3,
      chipName: 'UX',
      active: false

    },
    {
      id: 4,
      chipName: 'UI Design',
      active: false

    },
    {
      id: 5,
      chipName: 'Tech',
      active: false
    },
    {
      id: 6,
      chipName: 'Tools',
      active: false
    },
  ]

  getFilterType() {
    return this.filterType
  }

  // Chip
  getChips() {
    return this.chips;
  }

  filterRecentBookmarkByChip(chipCategory: string) {
    this.chips.forEach((chip: Chip) => { chip.active = false; });

    let selectedChip = this.chips.find((chip: Chip) => chip.chipName == chipCategory);

    if (selectedChip) {
      selectedChip.active = true;
    }

    if (chipCategory == 'All') {
      this.http.get<RecentbookmarkResponse>('http://localhost:5000/api/bookmark/recent').subscribe({
        next: (res) => {
          this.recentBookmark.set(res.data)
        },
        error: (error) => {
          const err = error.error.msg;
          if (!err) {
            this.toast.error("Check connection.");
            return
          }
          this.toast.error(err)
        }
      })
      return
    }

    // this.recentBookmarkObservable.pipe(
    //   map((bookmarks: Recentbookmark[]) =>
    //     this.recentBookmark.filter((bookmark) => bookmark.category === chipCategory)),
    //   tap((filterdBookmarks: Recentbookmark[]) => {
    //     this.recentBookmarkObservable.next(filterdBookmarks);
    //   })
    // ).subscribe();
  }

  // Recent Bookmark
  fetchRecentBookmarks() {
    this.http.get<RecentbookmarkResponse>('http://localhost:5000/api/bookmark/recent/sort?sortBy=date&order=desc').subscribe({
      next: (res) => {
        this.recentBookmark.set(res.data);
      },
      error: (error) => {
        const err = error.error.msg;
        if (!err) {
          this.toast.error("Check connection.");
          return
        }
        this.toast.error(err)
      }
    })
  }

  getRecentBookmark() {
    return this.recentBookmark();
  }

  sortRecentBookmarkBy(sortType: string, order: string) {
    this.http.get<RecentbookmarkResponse>(`http://localhost:5000/api/bookmark/recent/sort?sortBy=${sortType}&order=${order}`).subscribe({
      next: (res) => {
        this.recentBookmark.set(res.data);
      },
      error: (error) => {
        const err = error.error.msg;
        if (!err) {
          this.toast.error("Check connection.");
          return
        }
        this.toast.error(err)
      }
    })
  }

  deleteRecentBookmark(id: number) {
    this.http.delete<RecentbookmarkResponse>(`http://localhost:5000/api/bookmark/recent/${id}`).subscribe({
      next: () => {
        let filterData = this.recentBookmark().filter(item => item.id !== id);
        this.recentBookmark.set(filterData)
      },
      error: (error) => {
        const err = error.error.msg;
        if (!err) {
          this.toast.error("Check connection.");
          return
        }
        this.toast.error(err)
      }
    })
  }

  filterByTitle(searchText: string) {
    return this.http.get<SearchResponse>(`http://localhost:5000/api/bookmark/recent/search?title=${searchText}`);
  }
}
