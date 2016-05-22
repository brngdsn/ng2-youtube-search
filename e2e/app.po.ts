export class NgcliPlaygroundPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngcli-playground-app h1')).getText();
  }
}
