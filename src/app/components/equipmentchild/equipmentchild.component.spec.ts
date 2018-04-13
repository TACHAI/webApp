import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentchildComponent } from './equipmentchild.component';

describe('EquipmentchildComponent', () => {
  let component: EquipmentchildComponent;
  let fixture: ComponentFixture<EquipmentchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
