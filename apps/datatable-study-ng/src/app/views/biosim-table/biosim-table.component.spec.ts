import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiosimTableComponent } from './biosim-table.component';

describe('BiosimTableComponent', () => {
  let component: BiosimTableComponent;
  let fixture: ComponentFixture<BiosimTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiosimTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BiosimTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
