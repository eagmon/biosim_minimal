import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorDetailComponent } from './simulator-detail.component';

describe('SimulatorDetailComponent', () => {
  let component: SimulatorDetailComponent;
  let fixture: ComponentFixture<SimulatorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimulatorDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SimulatorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
