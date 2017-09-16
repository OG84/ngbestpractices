import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutResolversComponent } from './without-resolvers.component';

describe('WithoutResolversComponent', () => {
  let component: WithoutResolversComponent;
  let fixture: ComponentFixture<WithoutResolversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithoutResolversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutResolversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
