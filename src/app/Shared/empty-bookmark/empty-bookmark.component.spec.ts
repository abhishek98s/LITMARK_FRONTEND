import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyBookmarkComponent } from './empty-bookmark.component';

describe('EmptyBookmarkComponent', () => {
  let component: EmptyBookmarkComponent;
  let fixture: ComponentFixture<EmptyBookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyBookmarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptyBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
