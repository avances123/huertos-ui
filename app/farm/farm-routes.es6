(() => {
  'use strict';

  angular
    .module('farm')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('farm', {
        url: '/farm/:farmId',
        templateUrl: 'farm/farm.tpl.html',
        controller: 'FarmCtrl',
        controllerAs: 'farm',
        data: {
          requiresLogin: true
        }
      });
  }
}());
