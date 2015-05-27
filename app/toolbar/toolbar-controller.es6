(() => {
  'use strict';

  class ToolbarCtrl {
    constructor() {
      let vm = this;
      vm.ctrlName = 'ToolbarCtrl';
    }
  }

  /**
   * @ngdoc object
   * @name toolbar.controller:ToolbarCtrl
   *
   * @description
   *
   */
  angular
    .module('toolbar')
    .controller('ToolbarCtrl', ToolbarCtrl);
}());
