/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('MeCtrl', () => {
  let ctrl;

  beforeEach(module('me'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('MeCtrl');
  }));

  it('should have ctrlName as MeCtrl', () => {
    expect(ctrl.ctrlName).toEqual('MeCtrl');
  });
});
