import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkFolderComponent } from './bookmark-detail.component';

describe('BookmarkFolderComponent', () => {
  let component: BookmarkFolderComponent;
  let fixture: ComponentFixture<BookmarkFolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarkFolderComponent]
    });
    fixture = TestBed.createComponent(BookmarkFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
