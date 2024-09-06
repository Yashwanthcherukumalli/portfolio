import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentsmallworksComponent } from './recentsmallworks.component';

describe('RecentsmallworksComponent', () => {
  let component: RecentsmallworksComponent;
  let fixture: ComponentFixture<RecentsmallworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentsmallworksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentsmallworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
