import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhishlistsEmptyComponent } from './whishlists-empty.component';

describe('WhishlistsEmptyComponent', () => {
  let component: WhishlistsEmptyComponent;
  let fixture: ComponentFixture<WhishlistsEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhishlistsEmptyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhishlistsEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
