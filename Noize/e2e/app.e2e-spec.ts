import { NoizePage } from './app.po';

describe('noize App', () => {
  let page: NoizePage;

  beforeEach(() => {
    page = new NoizePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
