import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceLinkComponent } from './reference-link.component';

describe('ReferenceLinkComponent', () => {
  let component: ReferenceLinkComponent;
  let fixture: ComponentFixture<ReferenceLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferenceLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
