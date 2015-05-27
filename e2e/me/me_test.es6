/*global describe, beforeEach, it, browser, expect */
'use strict';

import MePage from './me.po';

describe('Me page', () => {
  let mePage;

  beforeEach(() => {
    mePage = new MePage();
    browser.get('/#/me');
  });

  it('should say MeCtrl', () => {
    expect(mePage.heading.getText()).toEqual('me');
    expect(mePage.text.getText()).toEqual('MeCtrl');
  });
});
