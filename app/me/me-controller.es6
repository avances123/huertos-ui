(() => {
  'use strict';

  class MeCtrl {
    constructor(SessionService) {
      let vm = this;
      vm.ctrlName = 'MeCtrl';


    }
  }

  /**
   * @ngdoc object
   * @name me.controller:MeCtrl
   *
   * @description
   *
   */
  angular
    .module('me')
    .controller('MeCtrl', MeCtrl);
}());
