(() => {
  'use strict';

  /* @ngdoc object
   * @name huertos
   * @description
   *
   */
  angular
    .module('huertos', [
      'ngMaterial',
      'ngMessages',
      'ui.router',
      'angular-storage',
      'angular-jwt',
      'env-config',
      'home',
      'toolbar',
      'login',
      'farm',
      'leftnav'
    ])

    .config(config_jwt)
    .config(config_restangular)
    .run(run) // Quiza quitar este porque controlo los 401

    .factory('authHttpResponseInterceptor',['$q','$location',function($q,$location){
        return {
            responseError: function(rejection) {
                if (rejection.status === 401) {
                    console.log("Response Error 401",rejection);
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        }
    }])
    .config(['$httpProvider',function($httpProvider) {
        //Http Intercpetor to check auth failures for xhr requests
        $httpProvider.interceptors.push('authHttpResponseInterceptor');
    }]);



    function config_jwt (jwtInterceptorProvider, $httpProvider) {
      jwtInterceptorProvider.tokenGetter = function(store) {
        return store.get('jwt');
      }

      $httpProvider.interceptors.push('jwtInterceptor');
    };

    function config_restangular (RestangularProvider,EnvironmentConfig) {
      RestangularProvider.setBaseUrl(EnvironmentConfig.api + 'api');
    };

    function run ($rootScope, $state, store, jwtHelper) {
      $rootScope.$on('$stateChangeStart', function(e, to) {
        if (to.data && to.data.requiresLogin) {
          if (!store.get('jwt') || jwtHelper.isTokenExpired(store.get('jwt'))) {
            e.preventDefault();
            $state.go('login');
          }
        }
      });
    };


    
}());
