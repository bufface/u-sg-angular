import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiationComponent } from './equiation.component';

describe('EquiationComponent', () => {
  let component: EquiationComponent;
  let fixture: ComponentFixture<EquiationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
