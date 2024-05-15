import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuridicalComponent } from './juridical.component';

describe('JuridicalComponent', () => {
  let component: JuridicalComponent;
  let fixture: ComponentFixture<JuridicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuridicalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuridicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
