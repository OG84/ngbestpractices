import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithResolversComponent } from './with-resolvers.component';

describe('WithResolversComponent', () => {
  let component: WithResolversComponent;
  let fixture: ComponentFixture<WithResolversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithResolversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithResolversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
