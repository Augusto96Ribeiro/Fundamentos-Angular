import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemploservicos1Component } from './exemploservicos1.component';

describe('Exemploservicos1Component', () => {
  let component: Exemploservicos1Component;
  let fixture: ComponentFixture<Exemploservicos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exemploservicos1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemploservicos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
