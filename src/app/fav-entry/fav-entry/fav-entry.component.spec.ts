import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavEntryComponent } from './fav-entry.component';

describe('FavEntryComponent', () => {
  let component: FavEntryComponent;
  let fixture: ComponentFixture<FavEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
