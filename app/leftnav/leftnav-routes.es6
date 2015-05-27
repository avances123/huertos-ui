(() => {
  'use strict';

  angular
    .module('leftnav')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('leftnav', {
        url: '/leftnav',
        templateUrl: 'leftnav/leftnav.tpl.html',
        controller: 'LeftnavCtrl',
        controllerAs: 'leftnav'
      });
  }
}());
