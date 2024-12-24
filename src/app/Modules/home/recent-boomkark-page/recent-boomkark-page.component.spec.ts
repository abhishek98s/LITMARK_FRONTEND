import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBoomkarkPageComponent } from './recent-boomkark-page.component';

describe('RecentBoomkarkPageComponent', () => {
  let component: RecentBoomkarkPageComponent;
  let fixture: ComponentFixture<RecentBoomkarkPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentBoomkarkPageComponent]
    });
    fixture = TestBed.createComponent(RecentBoomkarkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
