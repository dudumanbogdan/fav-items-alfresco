import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../../shared/shared.module';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import { By } from '@angular/platform-browser';
import { FavEntryComponent } from './fav-entry.component';
import { FavEntryDataService } from '../fav-entry-data.service';

class MockFavEntryDataService {
  getFavoriteList() {
    return Observable.of({
      list: {
        pagination: {},
        entries: [
          { entry: { targetGuid: '1ced', target: { file: {} } } },
          { entry: { targetGuid: '2def', target: { file: {} } } }
        ]
      }
    });
  }
}

describe('FavFileComponent', () => {
  let component: FavEntryComponent;
  let fixture: ComponentFixture<FavEntryComponent>;
  let service: FavEntryDataService;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FavEntryComponent],
        imports: [SharedModule],
        providers: [
          { provide: FavEntryDataService, useClass: MockFavEntryDataService }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FavEntryComponent);
    component = fixture.componentInstance;
    service = TestBed.get(FavEntryDataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on ngOnInit call service method getFavoriteList', () => {
    spyOn(service, 'getFavoriteList').and.callThrough();

    component.ngOnInit();

    expect(service.getFavoriteList).toHaveBeenCalled();
  });

  it('should list be *undefined* when error returned from service', () => {
    spyOn(service, 'getFavoriteList').and.returnValue(
      Observable.throw(new Error())
    );

    component.ngOnInit();

    expect(component.favEntries).toBeUndefined();
  });

  it('should list be *not undefined* whendata returned from service', () => {
    spyOn(service, 'getFavoriteList').and.callThrough();

    component.ngOnInit();

    expect(component.favEntries).toBeTruthy();
  });

  it('should *deleteFavEntry* event been called on delete-button', () => {
    spyOn(component, 'deleteFavEntry');
    fixture.detectChanges();

    const deleteClickable = fixture.debugElement.query(
      By.css('.delete-button')
    );

    deleteClickable.nativeElement.click();

    fixture.whenStable().then(() => {
      expect(component.deleteFavEntry).toHaveBeenCalled();
    });
  });
});
