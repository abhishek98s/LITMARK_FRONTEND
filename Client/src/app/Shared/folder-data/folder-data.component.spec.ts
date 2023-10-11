import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderDataComponent } from './folder-data.component';

describe('FolderDataComponent', () => {
  let component: FolderDataComponent;
  let fixture: ComponentFixture<FolderDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FolderDataComponent]
    });
    fixture = TestBed.createComponent(FolderDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
