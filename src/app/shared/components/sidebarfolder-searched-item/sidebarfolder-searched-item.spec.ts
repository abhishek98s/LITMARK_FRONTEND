import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderSearchItemComponent } from './sidebarfolder-searched-item.component';

describe('FolderSearchItemComponent', () => {
  let component: FolderSearchItemComponent;
  let fixture: ComponentFixture<FolderSearchItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FolderSearchItemComponent]
    });
    fixture = TestBed.createComponent(FolderSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
