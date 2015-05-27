/*global describe, beforeEach, it, browser, expect */
'use strict';

import FarmPage from './farm.po';

describe('Farm page', () => {
  let farmPage;

  beforeEach(() => {
    farmPage = new FarmPage();
    browser.get('/#/farm');
  });

  it('should say FarmCtrl', () => {
    expect(farmPage.heading.getText()).toEqual('farm');
    expect(farmPage.text.getText()).toEqual('FarmCtrl');
  });
});
