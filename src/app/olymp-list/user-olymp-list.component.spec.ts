import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOlympListComponent } from './user-olymp-list.component';

describe('UserOlympListComponent', () => {
  let component: UserOlympListComponent;
  let fixture: ComponentFixture<UserOlympListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOlympListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOlympListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
