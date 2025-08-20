import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Summaries } from './summaries';

describe('Summaries', () => {
  let component: Summaries;
  let fixture: ComponentFixture<Summaries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Summaries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Summaries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
