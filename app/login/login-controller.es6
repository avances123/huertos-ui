(() => {
  'use strict';

  class LoginCtrl {
    constructor(SessionService,store,$state) {
      let vm = this;
      vm.service = SessionService;
      vm.store = store;
      vm.ctrlName = 'LoginCtrl';
      vm.$state = $state;
      vm.user = {};
    }


    login() {
      this.service.login(this.user.username,this.user.password).success((data, status, headers) => {
        console.log("Guardando token:",data);
        this.store.set('jwt', data.token);
        this.$state.go('home');
      });
    }

    register() {
      this.service.register(this.user.username,this.user.password,this.user.email).success((data, status, headers) => {
        // Como me devuelve el objeto usuario en lugar del token, me logeo
        this.login();
      });

    }


  }

  /**
   * @ngdoc object
   * @name login.controller:LoginCtrl
   *
   * @description
   *
   */
  angular
    .module('login')
    .controller('LoginCtrl', LoginCtrl);
}());
