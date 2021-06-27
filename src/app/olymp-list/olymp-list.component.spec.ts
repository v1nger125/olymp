import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlympListComponent } from './olymp-list.component';

describe('OlympListComponent', () => {
  let component: OlympListComponent;
  let fixture: ComponentFixture<OlympListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlympListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlympListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
