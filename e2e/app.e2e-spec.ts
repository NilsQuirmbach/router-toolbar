import { RouterToolbarPage } from './app.po';

describe('router-toolbar App', function() {
  let page: RouterToolbarPage;

  beforeEach(() => {
    page = new RouterToolbarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
