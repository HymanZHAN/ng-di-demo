import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDemoComponent } from './info-demo.component';

describe('InfoDemoComponent', () => {
  let component: InfoDemoComponent;
  let fixture: ComponentFixture<InfoDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
