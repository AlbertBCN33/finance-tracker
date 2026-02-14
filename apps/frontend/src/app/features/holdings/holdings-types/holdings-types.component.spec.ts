import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoldingsTypesComponent } from './holdings-types.component';

describe('HoldingsTypesComponent', () => {
  let component: HoldingsTypesComponent;
  let fixture: ComponentFixture<HoldingsTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoldingsTypesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HoldingsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
