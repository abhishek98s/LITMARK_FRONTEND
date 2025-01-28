import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderInputBoxComponent } from './folder-input-box.component';

describe('FolderInputBoxComponent', () => {
  let component: FolderInputBoxComponent;
  let fixture: ComponentFixture<FolderInputBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderInputBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FolderInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
