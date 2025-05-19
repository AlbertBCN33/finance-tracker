import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhishlistsComponent } from './whishlists.component';

describe('WhishlistsComponent', () => {
  let component: WhishlistsComponent;
  let fixture: ComponentFixture<WhishlistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhishlistsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhishlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
