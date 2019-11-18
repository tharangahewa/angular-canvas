import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericObjectComponent } from './generic-object.component';

describe('GenericObjectComponent', () => {
  let component: GenericObjectComponent;
  let fixture: ComponentFixture<GenericObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
