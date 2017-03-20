import { Org.Company.PmbokUiPage } from './app.po';

describe('org.company.pmbok-ui App', () => {
  let page: Org.Company.PmbokUiPage;

  beforeEach(() => {
    page = new Org.Company.PmbokUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
