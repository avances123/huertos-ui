/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('FarmCtrl', () => {
  let ctrl;

  beforeEach(module('farm'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('FarmCtrl');
  }));

  it('should have ctrlName as FarmCtrl', () => {
    expect(ctrl.ctrlName).toEqual('FarmCtrl');
  });
});
