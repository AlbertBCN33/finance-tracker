import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoldingsSectoralComponent } from './holdings-sectoral.component';

describe('HoldingsSectoralComponent', () => {
  let component: HoldingsSectoralComponent;
  let fixture: ComponentFixture<HoldingsSectoralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoldingsSectoralComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HoldingsSectoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
