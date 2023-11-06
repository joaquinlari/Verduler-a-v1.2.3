import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoComponent } from './carrito.component';

describe('SidebarComponent', () => {
  let component: CarritoComponent;
  let fixture: ComponentFixture<CarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarritoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});