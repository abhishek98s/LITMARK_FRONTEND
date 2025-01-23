import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkSearchItemComponent } from './bookmark-search.component';

describe('BookmarkSearchItemComponent', () => {
  let component: BookmarkSearchItemComponent;
  let fixture: ComponentFixture<BookmarkSearchItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarkSearchItemComponent]
    });
    fixture = TestBed.createComponent(BookmarkSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
