import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { SearchText } from 'src/app/model/nestedfolder.model';

@Injectable({
  providedIn: 'root'
})
export class SearchTextService {
  private searchTextSubject = new BehaviorSubject<SearchText[]>([]);
  private searchTexts: SearchText[] = [];

  setSearchText(searchText: string, inputId: string) {
    this.clearSearchText()
    const index = this.searchTexts.findIndex((item) => item.inputId === inputId)

    if (index !== -1) {
      this.searchTexts[index].searchText = searchText;
    } else {
      this.searchTexts.push({ inputId, searchText })
    }

    this.searchTextSubject.next(this.searchTexts);
  }

  getSearchText(inputId: string): Observable<string> {
    return this.searchTextSubject.asObservable().pipe(
      map((searchTexts: SearchText[]) => {
        const item = searchTexts.find((item: SearchText) => item.inputId === inputId);
        return item ? item.searchText : '';
      })
    )
  }

  clearSearchText() {
    this.searchTexts = [];
    this.searchTextSubject.next(this.searchTexts);
  }
}
