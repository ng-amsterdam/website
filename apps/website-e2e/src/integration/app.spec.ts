import { getSubTitle, getPageTitle, getSiteTitle } from '../support/app.po';

describe('website', () => {
  beforeEach(() => cy.visit('/'));

  it('should have ng.amsterdam as the page title', () => {
    getSiteTitle().contains('ng.amsterdam')
  });

  it('should display ng.amsterdam', () => {
    getPageTitle().contains('ng.amsterdam');
  });

  it('should display coming soon', () => {
    getSubTitle().contains('Coming Soon!');
  });
});
