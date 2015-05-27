/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('LoginCtrl', () => {
  let ctrl;

  beforeEach(module('login'));
  beforeEach(module('huertos'));

  beforeEach(inject(($rootScope, $controller,SessionService) => {
    ctrl = $controller('LoginCtrl');
  }));

  it('should have ctrlName as LoginCtrl', () => {
    expect(ctrl.ctrlName).toEqual('LoginCtrl');
  });
});
