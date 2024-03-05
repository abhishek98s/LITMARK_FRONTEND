import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyFolderComponent } from './empty-folder.component';

describe('EmptyFolderComponent', () => {
  let component: EmptyFolderComponent;
  let fixture: ComponentFixture<EmptyFolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyFolderComponent]
    });
    fixture = TestBed.createComponent(EmptyFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
