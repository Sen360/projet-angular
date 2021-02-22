import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  getAppTitle() {
    return element(by.css('.navbar-brand')).getText();
  }
}
