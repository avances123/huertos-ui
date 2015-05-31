(() => {
  'use strict';

  class LeftnavCtrl {
    constructor($mdSidenav) {
      let vm = this;
      vm.ctrlName = 'LeftnavCtrl';
      vm.sidenav = $mdSidenav;
    }

    close(){
      this.sidenav('left').close();
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
