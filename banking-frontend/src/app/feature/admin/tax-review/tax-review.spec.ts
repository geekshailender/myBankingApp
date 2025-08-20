import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxReview } from './tax-review';

describe('TaxReview', () => {
  let component: TaxReview;
  let fixture: ComponentFixture<TaxReview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxReview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxReview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
