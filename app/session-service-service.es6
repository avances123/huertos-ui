(() => {
  'use strict';

  class SessionService {
    constructor($http,EnvironmentConfig) {
      this.$http = $http;
      this.env_config = EnvironmentConfig;
    }

    login(username,password){
      var data = {'username':username,'password':password};
      return this.$http.post(this.env_config.api + "auth/login/",data);
    }

    register(username,password,email){
      var data = {'username':username,'password':password,'email':email};
      return this.$http.post(this.env_config.api + "auth/register/", data);
    }
  }

  /**
   * @ngdoc service
   * @name huertos.service:SessionService
   *
   * @description
   *
   */
  angular
    .module('huertos')
    .service('SessionService', SessionService);
}());
