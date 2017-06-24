import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountersComponentComponent } from './counters-component.component';

describe('CountersComponentComponent', () => {
  let component: CountersComponentComponent;
  let fixture: ComponentFixture<CountersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
