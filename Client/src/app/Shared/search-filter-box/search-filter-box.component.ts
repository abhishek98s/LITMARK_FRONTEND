import { Component } from '@angular/core';

@Component({
  selector: 'app-search-filter-box',
  templateUrl: './search-filter-box.component.html',
  styleUrls: ['./search-filter-box.component.scss']
})
export class SearchFilterBoxComponent {
  filter: string = 'Date';

  changeFilter(filterOption: string) {
    this.filter = filterOption;
  }
}
