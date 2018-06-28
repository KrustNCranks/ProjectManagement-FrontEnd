import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSucessfulComponent } from './signup-sucessful.component';

describe('SignupSucessfulComponent', () => {
  let component: SignupSucessfulComponent;
  let fixture: ComponentFixture<SignupSucessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupSucessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSucessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
