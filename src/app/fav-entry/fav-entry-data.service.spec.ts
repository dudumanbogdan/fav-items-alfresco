import { TestBed, inject } from '@angular/core/testing';

import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from '../core/toolbar/toolbar.component';
import { HttpClient } from '@angular/common/http';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { FavEntryDataService } from './fav-entry-data.service';

describe('Given a FavEntryDataService', () => {
    let httpMock: HttpTestingController;
    let service: FavEntryDataService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SharedModule, HttpClientTestingModule],
        providers: [FavEntryDataService]
      });

      service = TestBed.get(FavEntryDataService);
      httpMock = TestBed.get(HttpTestingController);
    });

    it(
      'should be created',
      // tslint:disable-next-line:no-shadowed-variable
      inject([FavEntryDataService], (service: FavEntryDataService) => {
        expect(service).toBeTruthy();
      })
    );

    it('should return an Observable of 0 mocked data', () => {
      const mockData = getEmptyMockData();

      service.getFavoriteList().subscribe(data => {
        expect(data.list.entries.length).toBe(0);
      });

      const req = httpMock.expectOne(
        `${FavEntryDataService.baseEndPoint}/favorites.json`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockData);
    });

    it('should return an Observable of 2 mocked data', () => {
      const mockData = getTwoMockData();

      service.getFavoriteList().subscribe(data => {
        expect(data.list.entries.length).toBe(2);
      });

      const req = httpMock.expectOne(
        `${FavEntryDataService.baseEndPoint}/favorites.json`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockData);
    });

    it('should throw error message when http call with Error', () => {

      service.getFavoriteList().subscribe(data => {}, err => {
        expect(err).toBe('Something bad happened; please try again later.');
      }
    );

      httpMock.expectOne(`${FavEntryDataService.baseEndPoint}/favorites.json`).error(new ErrorEvent('t'));
    });
  });

  function getEmptyMockData() {
    return {
      list: {
        pagination: {},
        entries: []
      }
    };
  }
  function getTwoMockData() {
    return {
      list: {
        pagination: {},
        entries: [
          { entry: { targetGuid: '1ced' } },
          { entry: { targetGuid: '2def' } }
        ]
      }
    };
  }
