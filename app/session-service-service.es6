(() => {
  'use strict';

  class SessionService {
    constructor($http) {
      this.$http = $http;
    }

    login(username,password){
      var data = {'username':username,'password':password};
      return this.$http.post("http://localhost:8000/auth/login/",data);
    }

    register(username,password,email){
      var data = {'username':username,'password':password,'email':email};
      return this.$http.post("http://localhost:8000/auth/register/",data);
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
