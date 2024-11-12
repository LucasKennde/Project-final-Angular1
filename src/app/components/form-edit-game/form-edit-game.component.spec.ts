import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditGameComponent } from './form-edit-game.component';

describe('FormEditGameComponent', () => {
  let component: FormEditGameComponent;
  let fixture: ComponentFixture<FormEditGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEditGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
