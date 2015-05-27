/*global element, by*/
'use strict';

class HomePage {
  constructor() {
    this.text = element(by.tagName('p'));
    this.heading = element(by.tagName('h3'));
  }
}

module.exports = HomePage;
