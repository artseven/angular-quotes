import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckNorrisPageComponentComponent } from './chuck-norris-page-component.component';

describe('ChuckNorrisPageComponentComponent', () => {
  let component: ChuckNorrisPageComponentComponent;
  let fixture: ComponentFixture<ChuckNorrisPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuckNorrisPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckNorrisPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
