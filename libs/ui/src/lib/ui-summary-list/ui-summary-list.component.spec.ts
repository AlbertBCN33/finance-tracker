import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiSummaryListComponent } from './ui-summary-list.component';

describe('UiSummaryListComponent', () => {
  let component: UiSummaryListComponent;
  let fixture: ComponentFixture<UiSummaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSummaryListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiSummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
