/*global element, by*/
'use strict';

class MePage {
  constructor() {
    this.text = element(by.tagName('p'));
    this.heading = element(by.tagName('h2'));
  }
}

module.exports = MePage;
