import { MovieTheaterApp.ClientPage } from './app.po';

describe('movie-theater-app.client App', () => {
  let page: MovieTheaterApp.ClientPage;

  beforeEach(() => {
    page = new MovieTheaterApp.ClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
