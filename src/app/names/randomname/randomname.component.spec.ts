import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNameComponent } from './randomname.component';

describe('RandomnameComponent', () => {
  let component: RandomNameComponent;
  let fixture: ComponentFixture<RandomNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
