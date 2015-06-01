(() => {
  'use strict';

  class LeftnavCtrl {
    constructor($mdSidenav,Restangular,$state) {
      let vm = this;
      vm.ctrlName = 'LeftnavCtrl';
      vm.sidenav = $mdSidenav;
      vm.rest = Restangular;
      vm.state = $state;

      // Mis huertos
      vm.myfarms = vm.rest.all('farms').getList({owner: 'admin'}).$object;
      vm.farms_following = vm.rest.all('farms').all('following').getList().$object;
    }

    close(){
      this.sidenav('left').close();
    }

    new_farm(){
      var that = this;
      this.myfarms.post({name:'nuevo',owner:1,zone_set:[]}).then(function (farm) {
        that.state.go('farm',{farmId:farm.id});
        that.myfarms.push(farm);
      })
    }
  }

  /**
   * @ngdoc object
   * @name leftnav.controller:LeftnavCtrl
   *
   * @description
   *
   */
  angular
    .module('leftnav')
    .controller('LeftnavCtrl', LeftnavCtrl);
}());
