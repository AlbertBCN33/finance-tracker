import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoldingsGeographyComponent } from './holdings-geography.component';

describe('HoldingsGeographyComponent', () => {
  let component: HoldingsGeographyComponent;
  let fixture: ComponentFixture<HoldingsGeographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoldingsGeographyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HoldingsGeographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
