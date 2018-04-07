import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/userFavEntries');
  }

  pageContent() {
    return element(by.css('.page-content'));
  }

  cards() {
    return this.pageContent().all(by.tagName('mat-card'));
  }

  countElements() {
    return this.cards().count();
  }

  deleteButtonElement() {
    return element.all(by.className('delete-button'));
  }
}
