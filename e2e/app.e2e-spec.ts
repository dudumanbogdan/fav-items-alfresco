import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('toh-twitch-tut App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  describe('when you enter on page,', function() {
    let countFavoriteItems = 0;

    it('should have at least one favorite item', () => {
      page.navigateTo();
      browser.waitForAngular();

      page.countElements().then(num => {
        countFavoriteItems = num;
        expect(countFavoriteItems).toBeGreaterThan(0);
      });
    });

    it('you delete one favorite item', () => {
      page.deleteButtonElement().first().click();
    });

    it('the count of favorite items is less with one item', () => {
      expect(page.countElements()).toBe(countFavoriteItems - 1);
    });
  });
});
