import { FaydenTechTemplatePage } from './app.po';

describe('FaydenTech App', function() {
  let page: FaydenTechTemplatePage;

  beforeEach(() => {
    page = new FaydenTechTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
