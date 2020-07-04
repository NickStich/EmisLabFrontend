import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiLabComponent } from './emi-lab.component';

describe('EmiLabComponent', () => {
  let component: EmiLabComponent;
  let fixture: ComponentFixture<EmiLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmiLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
