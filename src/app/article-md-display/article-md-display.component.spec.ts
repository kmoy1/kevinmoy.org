import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleMdDisplayComponent } from './article-md-display.component';

describe('ArticleMdDisplayComponent', () => {
  let component: ArticleMdDisplayComponent;
  let fixture: ComponentFixture<ArticleMdDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleMdDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleMdDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
