import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPreviewComponent } from './activity-preview.component';

describe('ActivityPreviewComponent', () => {
  let component: ActivityPreviewComponent;
  let fixture: ComponentFixture<ActivityPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityPreviewComponent]
    });
    fixture = TestBed.createComponent(ActivityPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
