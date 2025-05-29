import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiFormFieldAddonComponent } from './ui-form-field-addon.component';

describe('UiFormFieldAddonComponent', () => {
  let component: UiFormFieldAddonComponent;
  let fixture: ComponentFixture<UiFormFieldAddonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiFormFieldAddonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiFormFieldAddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
