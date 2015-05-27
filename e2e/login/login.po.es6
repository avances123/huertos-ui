/*global element, by*/
'use strict';

class LoginPage {
  constructor() {
    this.pest1 = element(by.xpath('/html/body/div[1]/div[2]/md-content/md-tabs/md-tabs-wrapper/md-tabs-canvas/md-pagination-wrapper/md-tab-item[1]/span'));
    this.pest2 = element(by.xpath('/html/body/div[1]/div[2]/md-content/md-tabs/md-tabs-wrapper/md-tabs-canvas/md-pagination-wrapper/md-tab-item[2]/span'));
    this.reg_button = element(by.xpath('//*[@id="tab-content-002"]/md-content/form/button/span'));
    this.heading = element(by.tagName('h3'));
  }
}

module.exports = LoginPage;
