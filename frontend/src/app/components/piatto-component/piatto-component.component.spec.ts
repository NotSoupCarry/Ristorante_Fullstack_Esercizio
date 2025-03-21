import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiattoComponentComponent } from './piatto-component.component';

describe('PiattoComponentComponent', () => {
  let component: PiattoComponentComponent;
  let fixture: ComponentFixture<PiattoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiattoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiattoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
