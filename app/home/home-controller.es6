(() => {
  'use strict';

  class HomeCtrl {
    constructor(Restangular) {
      let vm = this;
      vm.rest = Restangular;
      vm.ctrlName = 'HomeCtrl';

      // REST OBJECTS
      vm.actions = vm.rest.all('actions').getList().$object;
    }
  }

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);
}());
