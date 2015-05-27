/*global describe, beforeEach, it, browser, expect */
'use strict';

import LeftnavPage from './leftnav.po';

describe('Leftnav page', () => {
  let leftnavPage;

  beforeEach(() => {
    leftnavPage = new LeftnavPage();
    browser.get('/#/leftnav');
  });

  it('should say LeftnavCtrl', () => {
    expect(leftnavPage.heading.getText()).toEqual('leftnav');
    expect(leftnavPage.text.getText()).toEqual('LeftnavCtrl');
  });
});
