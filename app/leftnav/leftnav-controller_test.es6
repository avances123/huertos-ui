/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('LeftnavCtrl', () => {
  let ctrl;

  beforeEach(module('leftnav'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('LeftnavCtrl');
  }));

  it('should have ctrlName as LeftnavCtrl', () => {
    expect(ctrl.ctrlName).toEqual('LeftnavCtrl');
  });
});
