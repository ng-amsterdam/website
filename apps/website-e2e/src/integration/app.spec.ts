import { getSubTitle, getPageTitle, getSiteTitle } from '../support/app.po';

describe('website', () => {
  beforeEach(() => cy.visit('/'));

  it('should have ngAmsterdam as the page title', () => {
    getSiteTitle().contains('ngAmsterdam')
  });

  it('should display ngAmsterdam', () => {
    getPageTitle().contains('ngAmsterdam');
  });

  it('should display coming soon', () => {
    getSubTitle().contains('Coming Soon!');
  });
});
