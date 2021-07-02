import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOlympComponent } from './add-olymp.component';

describe('AddOlympComponent', () => {
  let component: AddOlympComponent;
  let fixture: ComponentFixture<AddOlympComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOlympComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOlympComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
