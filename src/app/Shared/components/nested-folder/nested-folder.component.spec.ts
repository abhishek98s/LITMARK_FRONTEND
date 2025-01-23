import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFolderComponent } from './nested-folder.component';

describe('NestedFolderComponent', () => {
  let component: NestedFolderComponent;
  let fixture: ComponentFixture<NestedFolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedFolderComponent]
    });
    fixture = TestBed.createComponent(NestedFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
