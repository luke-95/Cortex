import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacesTabsComponent } from './spaces-tabs-component.component';

describe('SpacesTabsComponentComponent', () => {
  let component: SpacesTabsComponent;
  let fixture: ComponentFixture<SpacesTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacesTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacesTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
