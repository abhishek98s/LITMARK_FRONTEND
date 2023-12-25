import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBookmarkComponent } from './recent-bookmark.component';

describe('RecentBookmarkComponent', () => {
  let component: RecentBookmarkComponent;
  let fixture: ComponentFixture<RecentBookmarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentBookmarkComponent]
    });
    fixture = TestBed.createComponent(RecentBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
