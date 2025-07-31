import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPages } from './post-pages';

describe('PostPages', () => {
  let component: PostPages;
  let fixture: ComponentFixture<PostPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
