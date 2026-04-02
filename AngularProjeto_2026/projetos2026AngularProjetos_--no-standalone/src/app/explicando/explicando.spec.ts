import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Explicando } from './explicando';

describe('Explicando', () => {
  let component: Explicando;
  let fixture: ComponentFixture<Explicando>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Explicando],
    }).compileComponents();

    fixture = TestBed.createComponent(Explicando);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
