import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartLockComponent } from './smart-lock.component';

describe('SmartLockComponent', () => {
  let component: SmartLockComponent;
  let fixture: ComponentFixture<SmartLockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartLockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
