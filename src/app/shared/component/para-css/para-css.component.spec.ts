import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaCssComponent } from './para-css.component';

describe('ParaCssComponent', () => {
  let component: ParaCssComponent;
  let fixture: ComponentFixture<ParaCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParaCssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParaCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
