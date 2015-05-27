(() => {
  'use strict';

  angular
    .module('huertos')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
