import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceReferenceComponent } from './source-reference.component';

describe('SourceReferenceComponent', () => {
  let component: SourceReferenceComponent;
  let fixture: ComponentFixture<SourceReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SourceReferenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SourceReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
