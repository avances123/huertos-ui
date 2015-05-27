/*global describe, beforeEach, it, browser, expect */
'use strict';

import ToolbarPage from './toolbar.po';

describe('Toolbar page', () => {
  let toolbarPage;

  beforeEach(() => {
    toolbarPage = new ToolbarPage();
    browser.get('/#/home');
  });

  it('should say ToolbarCtrl', () => {
    expect(toolbarPage.titulo.getText()).toEqual('Titulo');
  });
});
