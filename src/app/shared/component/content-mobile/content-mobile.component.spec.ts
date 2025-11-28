import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMobileComponent } from './content-mobile.component';

describe('ContentMobileComponent', () => {
  let component: ContentMobileComponent;
  let fixture: ComponentFixture<ContentMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
