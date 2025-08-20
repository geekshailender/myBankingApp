import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mytable } from './mytable';

describe('Mytable', () => {
  let component: Mytable;
  let fixture: ComponentFixture<Mytable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mytable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mytable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
