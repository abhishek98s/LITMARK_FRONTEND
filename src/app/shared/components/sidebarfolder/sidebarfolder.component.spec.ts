import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderComponent } from './sidebarfolder.component';

describe('FolderComponent', () => {
  let component: FolderComponent;
  let fixture: ComponentFixture<FolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FolderComponent]
    });
    fixture = TestBed.createComponent(FolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
