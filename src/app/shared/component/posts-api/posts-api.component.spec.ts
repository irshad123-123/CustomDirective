import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsApiComponent } from './posts-api.component';

describe('PostsApiComponent', () => {
  let component: PostsApiComponent;
  let fixture: ComponentFixture<PostsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
