import { getSubTitle, getTitle } from '../support/app.po';

describe('website', () => {
  beforeEach(() => cy.visit('/'));

  it('should display ng.amsterdam', () => {
    getTitle().contains('ng.amsterdam');
  });

  it('should display coming soon', () => {
    getSubTitle().contains('Coming Soon!');
  });
});
