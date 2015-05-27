/*global element, by*/
'use strict';

class ToolbarPage {
  constructor() {
    this.titulo = element(by.tagName('h3'));
  }
}

module.exports = ToolbarPage;
