import { Component, Input } from '@angular/core';
import { BookmarkSearchObject } from 'src/app/Model/folder';

@Component({
  selector: 'app-bookmark-search',
  templateUrl: './bookmark-search.component.html',
  styleUrls: ['./bookmark-search.component.scss']
})
export class BookmarkSearchComponent {
  @Input() bookmarkResult! :BookmarkSearchObject;
}
