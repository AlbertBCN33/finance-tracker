import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiPageCardComponent } from './ui-page-card.component';

describe('UiPageCardComponent', () => {
  let component: UiPageCardComponent;
  let fixture: ComponentFixture<UiPageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPageCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
