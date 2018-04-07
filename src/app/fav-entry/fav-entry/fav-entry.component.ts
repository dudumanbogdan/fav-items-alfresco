import { Component, OnInit } from '@angular/core';
import { FavEntry } from '../../core/model/fav-entry';
import { FavEntryDataService } from '../fav-entry-data.service';

@Component({
  selector: 'alf-fav-entry',
  templateUrl: './fav-entry.component.html',
  styleUrls: ['./fav-entry.component.scss']
})
export class FavEntryComponent implements OnInit {
  favEntries: FavEntry[];

  constructor(private favEntryDataService: FavEntryDataService) {}

  ngOnInit() {
    this.favEntryDataService.getFavoriteList().subscribe(
      data => {
        this.favEntries = data.list.entries.map(x => {
          if (x.entry.target.file !== undefined) {
            return x.entry.target.file;
          } else if (x.entry.target.folder !== undefined) {
            return x.entry.target.folder;
          }
          return null;
        });
      },
      error => {
        // TODO - add toaster
        console.log('error', error);
      }
    );
  }

  deleteFavEntry(item: FavEntry) {
    // TODO - add logic to remove also from backend
    this.favEntries = this.favEntries.filter(x => x.id !== item.id);
  }
}
