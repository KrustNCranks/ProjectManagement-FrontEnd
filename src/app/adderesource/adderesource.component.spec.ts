import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdderesourceComponent } from './adderesource.component';

describe('AdderesourceComponent', () => {
  let component: AdderesourceComponent;
  let fixture: ComponentFixture<AdderesourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdderesourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdderesourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
