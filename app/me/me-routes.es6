(() => {
  'use strict';

  angular
    .module('me')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('me', {
        url: '/me',
        templateUrl: 'me/me.tpl.html',
        controller: 'MeCtrl',
        controllerAs: 'me',
        data: {
          requiresLogin: true
        }
      });
  }
}());
