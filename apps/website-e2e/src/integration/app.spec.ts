import { getGreeting } from '../support/app.po';

describe('website', () => {
  beforeEach(() => cy.visit('/'));

  it('should display coming soon', () => {
    getGreeting().contains('Coming Soon!');
  });
});
