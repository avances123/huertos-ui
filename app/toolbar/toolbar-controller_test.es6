/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('ToolbarCtrl', () => {
  let ctrl;

  beforeEach(module('toolbar'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('ToolbarCtrl');
  }));

  it('should have ctrlName as ToolbarCtrl', () => {
    expect(ctrl.ctrlName).toEqual('ToolbarCtrl');
  });
});
