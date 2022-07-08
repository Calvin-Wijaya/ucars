import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcarsQuestionsComponent } from './ucars-questions.component';

describe('UcarsQuestionsComponent', () => {
  let component: UcarsQuestionsComponent;
  let fixture: ComponentFixture<UcarsQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcarsQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcarsQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
