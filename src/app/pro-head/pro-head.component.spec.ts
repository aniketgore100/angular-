import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProHeadComponent } from './pro-head.component';

describe('ProHeadComponent', () => {
  let component: ProHeadComponent;
  let fixture: ComponentFixture<ProHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
