import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCastingComponent } from './title-casting.component';

describe('TitleCastingComponent', () => {
  let component: TitleCastingComponent;
  let fixture: ComponentFixture<TitleCastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleCastingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
