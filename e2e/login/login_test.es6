/*global describe, beforeEach, it, browser, expect */
'use strict';

import LoginPage from './login.po';

describe('Login page', () => {
  let loginPage;

  beforeEach(() => {
    loginPage = new LoginPage();
    browser.get('/#/login');
  });

  it('should print tabs', () => {
    expect(loginPage.pest1.getText()).toEqual('LOGIN');
    expect(loginPage.pest2.getText()).toEqual('REGISTER');
  });

  it('should move to register tab after click', () => {
    loginPage.pest2.click();
    expect(loginPage.reg_button.isPresent()).toBe(true);
  });
});
