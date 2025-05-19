import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexFundsComponent } from './index-funds.component';

describe('IndexFundsComponent', () => {
  let component: IndexFundsComponent;
  let fixture: ComponentFixture<IndexFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexFundsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IndexFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
