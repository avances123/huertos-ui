(() => {
  'use strict';

  class LeftnavCtrl {
    constructor() {
      let vm = this;
      vm.ctrlName = 'LeftnavCtrl';
    }
  }

  /**
   * @ngdoc object
   * @name leftnav.controller:LeftnavCtrl
   *
   * @description
   *
   */
  angular
    .module('leftnav')
    .controller('LeftnavCtrl', LeftnavCtrl);
}());
