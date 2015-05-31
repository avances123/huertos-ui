(() => {
  'use strict';

  class ToolbarCtrl {
    constructor($mdSidenav) {
      let vm = this;
      vm.ctrlName = 'ToolbarCtrl';
      vm.sidenav = $mdSidenav;
    }

    open_leftnav(){
      this.sidenav('left').toggle();
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
