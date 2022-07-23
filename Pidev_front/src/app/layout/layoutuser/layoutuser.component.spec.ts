import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutuserComponent } from './layoutuser.component';

describe('LayoutuserComponent', () => {
  let component: LayoutuserComponent;
  let fixture: ComponentFixture<LayoutuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
