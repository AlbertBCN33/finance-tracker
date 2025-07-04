import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiInputTextComponent } from './ui-input-text.component';

describe('UiInputTextComponent', () => {
  let component: UiInputTextComponent;
  let fixture: ComponentFixture<UiInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiInputTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
