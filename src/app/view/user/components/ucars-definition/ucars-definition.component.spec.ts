import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcarsDefinitionComponent } from './ucars-definition.component';

describe('UcarsDefinitionComponent', () => {
  let component: UcarsDefinitionComponent;
  let fixture: ComponentFixture<UcarsDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcarsDefinitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcarsDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
