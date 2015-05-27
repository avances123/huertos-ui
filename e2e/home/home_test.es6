/*global describe, beforeEach, it, browser, expect */
'use strict';

import HomePage from './home.po';

describe('Home page', () => {
  let homePage;

  beforeEach(() => {
    homePage = new HomePage();
    browser.get('/#/home');
  });

  it('should say HomeCtrl', () => {
    expect(homePage.heading.getText()).toEqual('Titulo');
    expect(homePage.text.getText()).toEqual('HomeCtrl');
  });
});
