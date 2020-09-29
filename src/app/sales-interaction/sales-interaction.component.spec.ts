import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesInteractionComponent } from './sales-interaction.component';

describe('SalesInteractionComponent', () => {
  let component: SalesInteractionComponent;
  let fixture: ComponentFixture<SalesInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesInteractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
