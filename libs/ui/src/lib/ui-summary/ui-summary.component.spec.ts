import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiSummaryComponent } from './ui-summary.component';

describe('UiSummaryComponent', () => {
  let component: UiSummaryComponent;
  let fixture: ComponentFixture<UiSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
