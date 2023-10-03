import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeritaryBtnComponent } from './teritary-btn.component';

describe('TeritaryBtnComponent', () => {
  let component: TeritaryBtnComponent;
  let fixture: ComponentFixture<TeritaryBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeritaryBtnComponent]
    });
    fixture = TestBed.createComponent(TeritaryBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
