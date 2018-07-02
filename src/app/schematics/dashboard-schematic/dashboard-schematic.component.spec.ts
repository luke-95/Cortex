
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSchematicComponent } from './dashboard-schematic.component';

describe('DashboardSchematicComponent', () => {
  let component: DashboardSchematicComponent;
  let fixture: ComponentFixture<DashboardSchematicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSchematicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSchematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
