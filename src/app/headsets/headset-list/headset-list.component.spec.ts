import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadsetListComponent } from './headset-list.component';

describe('HeadsetListComponent', () => {
  let component: HeadsetListComponent;
  let fixture: ComponentFixture<HeadsetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadsetListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadsetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
