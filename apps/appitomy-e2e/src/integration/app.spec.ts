import { getGreeting } from '../support/app.po';

describe('appitomy', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to appitomy!');
  });
});
