import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkInputBoxComponent } from './bookmark-input-box.component';

describe('BookmarkInputBoxComponent', () => {
  let component: BookmarkInputBoxComponent;
  let fixture: ComponentFixture<BookmarkInputBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmarkInputBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookmarkInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
