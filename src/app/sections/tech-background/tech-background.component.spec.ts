import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechBackgroundComponent } from './tech-background.component';

describe('TechBackgroundComponent', () => {
  let component: TechBackgroundComponent;
  let fixture: ComponentFixture<TechBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
