import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkFolderDetailComponent } from './bookmark-detail.component';

describe('BookmarkFolderDetailComponent', () => {
  let component: BookmarkFolderDetailComponent;
  let fixture: ComponentFixture<BookmarkFolderDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarkFolderDetailComponent]
    });
    fixture = TestBed.createComponent(BookmarkFolderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
